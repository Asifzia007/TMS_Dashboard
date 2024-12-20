import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ActionButtons = ({ onSave, onClear, saveText = "Save", clearText = "Clear" }) => {
  return (
    <Row className="d-flex gap-2 mt-3 p-2" style={{ background: "white" }}>
      <Col className="text-end">
        <Button variant="primary" onClick={onClear} size="sm">
          {clearText}
        </Button>
        <Button variant="success" onClick={onSave} size="sm">
          {saveText}
        </Button>
      </Col>
    </Row>
  );
};

export default ActionButtons;
