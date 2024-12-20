import React from "react";
import Box from "@mui/material/Box";
import "./Dashboard.css";
import Mainpage from "./Mainpage";
import RightSidebar from "./RightSidebar";

export const Dashboard = () => {
  const rightSidebarWidth = 250; // Width of the right sidebar

  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginTop: "55px",
          marginRight: `${rightSidebarWidth}px`, // Leave space for the right sidebar
          minHeight: "94vh",
          height: "100%",
          background: "white",
          overflowX: "auto", // Add horizontal scrolling for larger content
        }}
      >
        <Mainpage />
      </Box>

      {/* Right Sidebar (Fixed Position) */}
      <Box
        sx={{
          width: rightSidebarWidth,
          position: "fixed",
          right: 0,
          top: "55px",
          padding: "10px",
          height: "calc(100vh - 55px)", // Full viewport height minus the header
          backgroundColor: "#FEF9F2",
          overflowY: "auto", // Enable scrolling if content exceeds height
        }}
      >
        <RightSidebar />
      </Box>
    </Box>
  );
};
