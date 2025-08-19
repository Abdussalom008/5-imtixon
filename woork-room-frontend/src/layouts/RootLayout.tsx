import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../index.css";
const RootLayout = () => {
  return (
    <div className="">
      <div className="flex  p-[20px]  bg-[#F4F9FD]  ">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
