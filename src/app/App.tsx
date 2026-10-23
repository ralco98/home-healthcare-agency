import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary-light selection:text-primary-dark">
      <ScrollToTop />
      
      {/* SECTION 1 — Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>

      {/* SECTION 15 — Footer */}
      <Footer />
    </div>
  );
};

export default App;
