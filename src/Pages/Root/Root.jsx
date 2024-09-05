import { Outlet } from "react-router-dom";
import Navbar from "../../Componensts/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h2>Home</h2>
    </div>
  );
};

export default Root;
