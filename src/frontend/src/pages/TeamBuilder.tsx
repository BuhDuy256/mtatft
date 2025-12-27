import MainLayout from "../layouts/MainLayout";
import { HexagonalBoard } from '../components/HexagonalBoard';
import { UnitList } from '../components/UnitList';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useState, useMemo } from 'react';
import { Trash2 } from 'lucide-react';
import { useMetadata } from '../contexts/MetadataContext';

export default function TeamBuilderPage() {
  // Board state: Record of slot IDs to unit names
  // 4 rows x 7 cols = 28 slots
  const [boardState, setBoardState] = useState<Record<string, string | null>>({});
  
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const dragData = active.data.current;

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
  };

  return (
    <MainLayout>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex-1 flex items-center justify-center w-full max-w-[1100px] mx-auto py-8">
          <div className="space-y-4">
            {/* Clear Board Button */}
            <div className="flex justify-end">
              <button
                onClick={handleClearBoard}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-md"
              >
                <Trash2 size={18} />
                Clear Board
              </button>
            </div>
            
            {/* Hexagonal Board */}
            <div className="w-full">
              <HexagonalBoard boardState={boardState} unitImageUrlMap={unitImageUrlMap} />
            </div>
            
            {/* Unit List */}
            <div className="w-full">
              <UnitList />
            </div>
          </div>
        </div>
      </DndContext>
    </MainLayout>
  );
}