import React from "react";

import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, pt: 1}}>
        <Outlet />
      </Box>
    </Box>
  );
}
