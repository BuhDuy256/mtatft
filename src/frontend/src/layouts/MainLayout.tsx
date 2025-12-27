import Header from "../components/common/Header";
import { Footer } from "../components/common/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1e293b" }}
    >
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
