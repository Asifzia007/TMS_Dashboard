import React from "react";
import { Row, Col } from "react-bootstrap";

const PageHeader = ({ title }) => {
  return (
    <Row className="mt-2" style={headerStyle}>
      <Col className="d-flex align-items-center">
        <h3 className="mb-0" style={headerTextStyle}>
          {title}
        </h3>
      </Col>
    </Row>
  );
};

export default PageHeader;


const headerStyle = {
    height: "50px",
    backgroundColor: '#fff',
    // backgroundColor: "#edf4ff",
    // borderBottom: "2px solid #294b8140",
    margin: "0px",
    // boxShadow: "0px 2px 2px rgb(0, 60, 120, 0.5)", 
  };
  
  const headerTextStyle = {
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#003c78",
  };