
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CommuteIcon from "@mui/icons-material/Commute";
import ApartmentIcon from "@mui/icons-material/Apartment";


export const menuItems = [
  {
    text: "DASHBOARD",
    icon: <DashboardIcon sx={{ fontSize: "20px" }} />,
    path: "/dashboard",
  },
  {
    text: "MASTER",
    icon: <LayersIcon sx={{ fontSize: "20px" }} />, 
    path: "",
    submenu: [
      {
        text: "TMS",
        path: "",
        icon: <ApartmentIcon sx={{ fontSize: "20px" }} />, 
        submenu: [
          { text: "Vehicle Type", path: "/VehicleType", icon: <CommuteIcon sx={{ fontSize: "18px" }} /> },
          { text: "Vehicle Type Details", path: "/VehicleTypeDetails", icon: <LocalShippingIcon sx={{ fontSize: "18px" }} /> },
        ],
      },
    ],
  },
];
