import { Outlet } from "react-router-dom";
import Navbar from "../../Componensts/Navbar/Navbar";
import Footer from "../../Componensts/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
