import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="main-layout min-h-screen flex flex-col"
      style={{ backgroundColor: "#F0EAD6" }}
    >
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
