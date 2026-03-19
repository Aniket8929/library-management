
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Mainlayout;
