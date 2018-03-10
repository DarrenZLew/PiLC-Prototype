import React from "react";
import {
  FormGroup,
  FormControl,
  Col,
  Row,
  InputGroup,
  Button,
  Glyphicon
} from "react-bootstrap";
import { RenderInput } from "./RenderInput";

export const FieldBody = props => {
  const { id, label } = props;
  return (
    <Row style={{ marginBottom: "0px" }}>
      <FormGroup controlId={id}>
        <Col xs={6} style={{ padding: "0px" }}>
          <FormControl type="text" label={label} />
        </Col>
        <Col xs={6} style={{ padding: "0px" }}>
          <InputGroup>
            <RenderInput {...props} />
            <InputGroup.Button>
              <Button>
                <Glyphicon glyph="remove" />
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </Col>
      </FormGroup>
    </Row>
  );
};
