import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Box } from "@mui/material";
import CommonTable from "../../../Common/CommonTable";
import ActionButtons from "../../../Common/ActionButtons";
import PageHeader from "../../../Common/PageHeader";

const VehicleTypeDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(15); // Number of rows per page
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    vehicleTypeId: "",
    vehicleType: "",
    whichCustomer: "",
    modelNumber: "",
    vehicleCapacity: "",
    loadCapacity: "",
    palletisedTime: "",
    nonPalletisedTime: "",
    make: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const sidebarWidth = isSidebarOpen ? 200 : 0;
  const rightSidebarWidth = 250;

  const columns = [
    { id: "vehicleTypeId", label: "Vehicle Type ID", minWidth: 130 },
    { id: "vehicleType", label: "Vehicle Type", minWidth: 130 },
    { id: "whichCustomer", label: "Which Customer", minWidth: 130 },
    { id: "modelNumber", label: "Model Number", minWidth: 130 },
    { id: "vehicleCapacity", label: "Vehicle Capacity", minWidth: 130 },
    { id: "loadCapacity", label: "Load Capacity", minWidth: 120 },
    { id: "palletisedTime", label: "Palletised Time (min)", minWidth: 150 },
    {
      id: "nonPalletisedTime",
      label: "Non-Palletised Time (min)",
      minWidth: 180,
    },
    { id: "make", label: "Make", minWidth: 100 },
    { id: "action", label: "Action", minWidth: 100 },
  ];

  // Fetch Data (Mocked for now)
  useEffect(() => {
    setData(generateRandomData());
  }, []);

  const generateRandomData = () => {
    const vehicleTypes = [
      "Sedan",
      "SUV",
      "Truck",
      "Hatchback",
      "Convertible",
      "Coupe",
      "Minivan",
      "Crossover",
      "Pickup",
      "Wagon",
    ];
    const generateRandomId = () => `VT${Math.floor(Math.random() * 1000) + 1}`;
    const generateRandomModelNumber = () =>
      `M${Math.floor(Math.random() * 1000) + 1}`;

    return Array.from({ length: 20 }, () => ({
      vehicleTypeId: generateRandomId(),
      vehicleType:
        vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)],
      whichCustomer: `Customer ${Math.floor(Math.random() * 100) + 1}`,
      modelNumber: generateRandomModelNumber(),
      vehicleCapacity: `${Math.floor(Math.random() * 5000)} KG`,
      loadCapacity: `${Math.floor(Math.random() * 5000)} CFT`,
      palletisedTime: `${Math.floor(Math.random() * 100) + 1} min`,
      nonPalletisedTime: `${Math.floor(Math.random() * 100) + 1} min`,
      make: `Make ${Math.floor(Math.random() * 10) + 1}`,
    }));
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleEdit = (row) => {
    console.log("Editing row:", row);
    // Prefill form with row data
    setFormValues(row);
  };

  const handleDelete = (row) => {
    if (window.confirm(`Are you sure you want to delete ${row.vehicleTypeId}?`)) {
      setData(data.filter((item) => item.vehicleTypeId !== row.vehicleTypeId));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.vehicleTypeId)
      errors.vehicleTypeId = "Vehicle Type ID is required.";
    if (!formValues.vehicleType) errors.vehicleType = "Vehicle Type is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Saved data:", formValues);
      // Add/Update logic
      setFormValues({
        vehicleTypeId: "",
        vehicleType: "",
        whichCustomer: "",
        modelNumber: "",
        vehicleCapacity: "",
        loadCapacity: "",
        palletisedTime: "",
        nonPalletisedTime: "",
        make: "",
      });
    }
  };

  const handleClear = () => {
    setFormValues({
      vehicleTypeId: "",
      vehicleType: "",
      whichCustomer: "",
      modelNumber: "",
      vehicleCapacity: "",
      loadCapacity: "",
      palletisedTime: "",
      nonPalletisedTime: "",
      make: "",
    });
    setFormErrors({});
  };

  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <div
        style={{
          flexGrow: 1,
          padding: "16px",
          marginTop: "55px",
          width: `calc(100vw - ${sidebarWidth + rightSidebarWidth}px)`,
          minHeight: "calc(100vh - 60px)",
          height: "100%",
          background: "#e3eaf0",
          overflowX: "auto",
          transition: "width 0.3s ease",
        }}
      >
       <PageHeader title="Vehicle Type Details" />
        <div className="mt-2 px-3 py-2" >
          <Form>
            <Row className="py-2" style={{ background: "white"  }}>
              <Col xs={12} sm={6} className="mb-2">
                <Form.Group controlId="vehicleTypeId">
                  <Form.Label style={labelStyle}>Vehicle Type ID</Form.Label>
                  <Form.Control
                    type="text"
                    style={inputStyle}
                    placeholder="Enter Vehicle Type ID"
                    value={formValues.vehicleTypeId}
                    onChange={handleInputChange}
                  />
                  {formErrors.vehicleTypeId && (
                    <small className="text-danger">
                      {formErrors.vehicleTypeId}
                    </small>
                  )}
                </Form.Group>
              </Col>
              {/* Repeat similar fields for all other inputs */}
            </Row>
            <ActionButtons onSave={handleSave} onClear={handleClear} />
          </Form>
        </div>
    
          <CommonTable
            columns={columns}
            data={paginatedData}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
      
      </div>
    </Box>
  );
};

export default VehicleTypeDetails;

const labelStyle = {
  fontSize: "12px",
  fontWeight: "500",
   color: "#003c78",
  marginBottom:"4px"
};

const inputStyle = {
  height: "32px",
  fontSize: "12px",
  borderRadius: "4px",
};
