import { TraitsTable } from "../components/TraitsTable";
import MainLayout from "../layouts/MainLayout";

export default function Traits() {
  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
        <div className="rounded-lg overflow-hidden max-w-[660px] w-full">
          <TraitsTable />
        </div>
      </div>
    </MainLayout>
  );
}
