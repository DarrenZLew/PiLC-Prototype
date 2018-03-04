import React from "react";
import { FormGroup, ControlLabel, FormControl, Col, Row } from "react-bootstrap";

export const FieldGroup = ({ id, label, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <Row style={{marginLeft: "20px"}}>
        <ControlLabel>{label}</ControlLabel>
      </Row>
      <Col xs={6}>
        <FormControl {...props} />
      </Col>
      <Col xs={6}>
        <FormControl type="text" placeholder="Enter Component" />
      </Col>
    </FormGroup>
  );
};
