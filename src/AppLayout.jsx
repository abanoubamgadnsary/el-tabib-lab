import { Outlet } from "react-router-dom";
import Navbar from "./components/1-NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;
