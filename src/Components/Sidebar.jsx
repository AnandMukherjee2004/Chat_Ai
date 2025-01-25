import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { responsiveFontSizes } from "@mui/material";

function Sidebar() {
  return (
    <>
      <div className="sidebar w-[28vw] h-[100vh] bg-[#1E1F20] ">
        <h2 className="sidebar-title py-6 px-6">
          <MenuIcon className=" text-white text-lg" />
        </h2>
      </div>
    </>
  );
}

export default Sidebar;
