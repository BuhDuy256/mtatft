import MainLayout from "../layouts/MainLayout";
import { HexagonalBoard } from '../components/HexagonalBoard';
import { UnitList } from '../components/UnitList';
import { Share2, Copy, Trash2, Download } from 'lucide-react';

export default function TeamBuilderPage() {  
  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center w-full max-w-[1100px] mx-auto py-8">
      <div className="space-y-4">
      
        {/* Hexagonal Board */}
        <div className="w-full">
          <HexagonalBoard />
        </div>
        
        {/* Unit List */}
        <div className="w-full">
          <UnitList />
        </div>
      </div>
      </div>
    </MainLayout>
  );
}