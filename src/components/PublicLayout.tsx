import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PublicLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className={`flex-1 ${!isHome ? "pt-16" : ""}`}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;