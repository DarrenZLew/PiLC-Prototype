import React from "react";
import { Col, Row, Well } from "react-bootstrap";

export const Header = ({ headerName, fieldName }) => (
  <Row style={{ marginBottom: "0px" }}>
    <Col xs={6} style={{ padding: "0px" }}>
      <Well style={{ marginBottom: "0px" }} bsSize="small">
        {headerName}
      </Well>
    </Col>
    <Col xs={6} style={{ padding: "0px" }}>
      <Well style={{ marginBottom: "0px" }} bsSize="small">
        {fieldName}
      </Well>
    </Col>
  </Row>
);
