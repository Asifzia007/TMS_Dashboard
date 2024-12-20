import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Box } from "@mui/material";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CommonTable from "../../../CommonTable/CommonTable";

const VehicleType = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(15); // Number of rows per page
  const sidebarWidth = isSidebarOpen ? 200 : 0;
  const rightSidebarWidth = 250;

  const columns = [
    { id: "vehicleTypeId", label: "Vehicle Type ID", minWidth: 100 },
    { id: "vehicleType", label: "Vehicle Type", minWidth: 100 },
    { id: "action", label: "Action", minWidth: 100 },
  ];

  const data = [
    { vehicleTypeId: "VT001", vehicleType: "Sedan" },
    { vehicleTypeId: "VT002", vehicleType: "SUV" },
    { vehicleTypeId: "VT003", vehicleType: "Truck" },
    { vehicleTypeId: "VT004", vehicleType: "Hatchback" },
    { vehicleTypeId: "VT005", vehicleType: "Convertible" },
    { vehicleTypeId: "VT006", vehicleType: "Coupe" },
    { vehicleTypeId: "VT007", vehicleType: "Minivan" },
    { vehicleTypeId: "VT008", vehicleType: "Crossover" },
    { vehicleTypeId: "VT009", vehicleType: "Pickup" },
    { vehicleTypeId: "VT010", vehicleType: "Wagon" },
    // Add more data if needed
  ];

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(data.length / rowsPerPage)) {
      setPage(newPage);
    }
  };

  const handleEdit = (row) => {
    console.log("Edit:", row);
    // Implement your edit logic
  };

  const handleDelete = (row) => {
    console.log("Delete:", row);
    // Implement your delete logic
  };

  const handleSave = () => {
    console.log("Save clicked");
    // Add save logic here
  };

  const handleClear = () => {
    console.log("Clear clicked");
    // Add clear logic here (e.g., reset form fields)
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
          background: "white",
          overflowX: "auto",
          transition: "width 0.3s ease",
        }}
      >
        <Row className="mt-2" style={headerStyle}>
          <Col className="d-flex align-items-center">
            <h3 className="mb-0" style={headerTextStyle}>
              Vehicle Type
            </h3>
          </Col>
        </Row>
        <div className="mt-2 px-3 py-1" style={{ background: "#e9ecefa1" }}>
          <Form>
            <Row>
              <Col xs={12} sm={6} className="mb-3">
                <Form.Group controlId="vehicleTypeId">
                  <Form.Label style={labelStyle}>Vehicle Type ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Vehicle Type ID"
                    style={inputStyle}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <Form.Group controlId="vehicleType">
                  <Form.Label style={labelStyle}>Vehicle Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Vehicle Type"
                    style={inputStyle}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="d-flex gap-2">
              <Col className="text-end">
                <Button variant="primary" onClick={handleClear} size="sm">
                  Clear
                </Button>
                <Button variant="success" onClick={handleSave} size="sm">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        {/* Use CommonTable here */}
        <CommonTable
          columns={columns}
          data={data}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </Box>
  );
};

export default VehicleType;

// Styles
const headerStyle = {
  height: "50px",
  backgroundColor: "#e9ecef",
  borderBottom: "2px solid #ced4da",
  margin: "0px",
};

const headerTextStyle = {
  fontSize: "14px",
  textTransform: "uppercase",
  fontWeight: "600",
  color: "#003c78",
};

const labelStyle = {
  fontSize: "11px",
  fontWeight: "500",
  color: "#333",
};

const inputStyle = {
  height: "32px",
  fontSize: "12px",
  borderRadius: "4px",
};
