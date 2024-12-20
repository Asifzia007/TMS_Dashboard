import "./App.css";
import { Routes, Route } from "react-router-dom";


import Layout from "./component/Layout";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import VehicleType from "./Pages/Vehicle/VehicleType/VehicleType";
import VehicleTypeDetails from "./Pages/Vehicle/VehicleTypeDetails/VehicleTypeDetails";


function App() {
  return (
    <Routes>
      {/* Routes inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="VehicleType" element={<VehicleType />} />
        <Route path="VehicleTypeDetails" element={<VehicleTypeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
