import { X } from "lucide-react";
import { useState } from "react";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (code: string) => void;
}

export function ImportModal({ isOpen, onClose, onImport }: ImportModalProps) {
  const [code, setCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onImport(code);
    setCode(""); // reset
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#333542] border border-[#555555] rounded-sm shadow-xl w-full max-w-lg p-6 relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-bold text-white mb-4">Import Composition</h2>
        <p className="text-gray-400 text-sm mb-4">
          Paste your team composition code below:
        </p>

        <textarea
          className="w-full h-32 bg-[#0f172a] border border-[#555555] rounded-sm p-3 text-gray-200 focus:outline-none focus:border-blue-500 font-mono text-sm resize-none"
          placeholder='{"board": {...}}'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoFocus
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!code.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-sm transition-colors font-medium"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}
