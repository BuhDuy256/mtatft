import MainLayout from "../layouts/MainLayout";
import { HexagonalBoard } from '../components/HexagonalBoard';
import { UnitList } from '../components/UnitList';
import { DndContext, DragOverlay, type DragEndEvent, type DragStartEvent } from '@dnd-kit/core';
import { useState, useMemo } from 'react';
import { Trash2, Download, Upload } from 'lucide-react';
import { ImportModal } from "../components/ImportModal";
import { useMetadata } from '../contexts/MetadataContext';

export default function TeamBuilderPage() {
  // Board state: Record of slot IDs to unit names
  // 4 rows x 7 cols = 28 slots
  const [boardState, setBoardState] = useState<Record<string, string | null>>({});
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [activeUnitName, setActiveUnitName] = useState<string | null>(null);
  
  // Get metadata for unit images
  const { data: metadata } = useMetadata();

  // Create a map from unit name to imageUrl
  const unitImageUrlMap = useMemo(() => {
    if (!metadata) return {};
    
    const map: Record<string, string> = {};
    metadata.units.forEach(unit => {
      map[unit.name] = unit.imageUrl;
    });
    return map;
  }, [metadata]);

  // Create a map from unit name to cost
  const unitCostMap = useMemo(() => {
    if (!metadata) return {};
    
    const map: Record<string, number> = {};
    metadata.units.forEach(unit => {
      map[unit.name] = unit.cost;
    });
    return map;
  }, [metadata]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragId(event.active.id as string);
    // Get unit name from data (works for both list and board)
    if (event.active.data.current?.unitName) {
      setActiveUnitName(event.active.data.current.unitName);
    } else {
      // Fallback to ID for unit list
      setActiveUnitName(event.active.id as string);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const dragData = active.data.current;

    // Reset drag state
    setActiveDragId(null);
    setActiveUnitName(null);

    // Case 1: Dragging from board
    if (dragData?.fromBoard) {
      const sourceSlotId = dragData.slotId;
      const unitName = dragData.unitName;

      // Case 1a: Dropped on another slot (move)
      if (over && over.id && typeof over.id === 'string' && over.id.startsWith('slot-')) {
        const targetSlotId = over.id;
        setBoardState((prev) => {
          const newState = { ...prev };
          // Remove from source
          delete newState[sourceSlotId];
          // Add to target
          newState[targetSlotId] = unitName;
          return newState;
        });
      } 
      // Case 1b: Dropped outside (remove from board)
      else {
        setBoardState((prev) => {
          const newState = { ...prev };
          delete newState[sourceSlotId];
          return newState;
        });
      }
    }
    // Case 2: Dragging from unit list
    else {
      if (over && over.id && typeof over.id === 'string' && over.id.startsWith('slot-')) {
        const slotId = over.id;
        const unitName = active.id as string;

        // Add to board
        setBoardState((prev) => ({
          ...prev,
          [slotId]: unitName,
        }));
      }
    }
  };

  const handleClearBoard = () => {
    setBoardState({});
    showToast('Board cleared');
  };

  const handleExportCode = async () => {
    // Create clean JSON (exclude null values)
    const cleanState: Record<string, { name: string, cost: number }> = {};
    Object.entries(boardState).forEach(([key, value]) => {
      if (value !== null) {
        cleanState[key] = {
          name: value,
          cost: unitCostMap[value] || 0
        };
      }
    });

    const jsonCode = JSON.stringify(cleanState, null, 2);
    const encodedCode = btoa(jsonCode); // Base64 encode

    try {
      await navigator.clipboard.writeText(encodedCode);
      showToast('Code copied to clipboard!');
    } catch (error) {
      showToast('Failed to copy code');
      console.error('Clipboard error:', error);
    }
  };

  // Open modal instead of prompt
  const handleImportCode = () => {
    setIsImportModalOpen(true);
  };

  // Handle actual import from modal
  const handleConfirmImport = (jsonString: string) => {
    try {
      const decoded = atob(jsonString); // Base64 decode
      const imported = JSON.parse(decoded);

      // Validate format
      if (typeof imported !== 'object' || imported === null) {
        throw new Error('Invalid format: must be an object');
      }

      // Validate slot IDs and build state
      const slotPattern = /^slot-[0-3]-[0-6]$/;
      const newState: Record<string, string> = {};

      for (const key of Object.keys(imported)) {
        if (!slotPattern.test(key)) {
          throw new Error(`Invalid slot ID: ${key}`);
        }
        
        const value = imported[key];
        
        // Handle new format { name, cost }
        if (typeof value === 'object' && value !== null && 'name' in value) {
           if (typeof value.name !== 'string') {
             throw new Error(`Invalid unit name at ${key}`);
           }
           newState[key] = value.name;
        } 
        // Handle legacy format (string directly)
        else if (typeof value === 'string') {
           newState[key] = value;
        }
        else {
           throw new Error(`Invalid data at ${key}`);
        }
      }

      // Update board state
      setBoardState(newState);
      showToast('Team composition imported!');
      setIsImportModalOpen(false); // Close modal on successful import
    } catch (error) {
      if (error instanceof Error) {
        showToast(`Import failed: ${error.message}`);
      } else {
        showToast('Import failed: Invalid code');
      }
      console.error('Import error:', error);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Get active drag unit info using explicitly tracked unit name
  const activeDragUnit = activeUnitName && metadata ? metadata.units.find(u => u.name === activeUnitName) : null;

  return (
    <MainLayout>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex-1 flex items-center justify-center w-full max-w-[1100px] mx-auto py-8">
          <div className="space-y-4">
            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={handleExportCode}
                className="flex items-center gap-2 px-4 py-2 bg-[#858585] hover:bg-[#707070] text-white rounded-sm transition-colors shadow-md"
              >
                <Download size={18} />
                Export
              </button>
              <button
                onClick={handleImportCode}
                className="flex items-center gap-2 px-4 py-2 bg-[#858585] hover:bg-[#707070] text-white rounded-sm transition-colors shadow-md"
              >
                <Upload size={18} />
                Import
              </button>
              <button
                onClick={handleClearBoard}
                className="flex items-center gap-2 px-4 py-2 bg-[#858585] hover:bg-[#707070] text-white rounded-sm transition-colors shadow-md"
              >
                <Trash2 size={18} />
                Clear
              </button>
            </div>
            
            {/* Toast Notification */}
            {toastMessage && (
              <div className="fixed top-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in">
                {toastMessage}
              </div>
            )}
            
            {/* Hexagonal Board */}
            <div className="w-full">
              <HexagonalBoard boardState={boardState} unitImageUrlMap={unitImageUrlMap} unitCostMap={unitCostMap} />
            </div>
            
            {/* Unit List */}
            <div className="w-full">
              <UnitList />
            </div>
          </div>
        </div>
        
        {/* Drag Overlay - Hexagon shaped */}
        <DragOverlay dropAnimation={null}>
          {activeDragId && activeDragUnit ? (() => {
            // Get border color based on unit cost
            const tierColors: Record<number, string> = {
              1: '#808080', // Gray
              2: '#4ade80', // Green
              3: '#60a5fa', // Blue
              4: '#a855f7', // Purple
              5: '#fbbf24', // Gold
            };
            const borderColor = tierColors[activeDragUnit.cost] || '#d4af37';
            
            return (
              <div className="w-20 h-20 pointer-events-none opacity-60">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <clipPath id="drag-hex-clip">
                      <polygon points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5" />
                    </clipPath>
                  </defs>
                  {/* Hexagon border */}
                  <polygon
                    points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
                    fill="none"
                    stroke={borderColor}
                    strokeWidth="4"
                  />
                  {/* Champion image clipped to hexagon */}
                  <image
                    href={activeDragUnit.imageUrl}
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    clipPath="url(#drag-hex-clip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            );
          })() : null}
        </DragOverlay>

        {/* Import Modal */}
        <ImportModal 
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          onImport={handleConfirmImport}
        />
      </DndContext>
    </MainLayout>
  );
}