import Header from "../components/common/Header";
import { Footer } from "../components/common/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#F0EAD6" }}
    >
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
