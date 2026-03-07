import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.component";

const MainLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
