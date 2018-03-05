import React from "react";
import { FormGroup, ControlLabel, Col } from "react-bootstrap";

export const FormSection = ({ fields }) => {
  const formSection = fields.map((field, index) => {
    return (
      <FormGroup key={"FormGroup" + index}>
        {field.map((input, idx) => {
          return (
            <Col key={input.id + idx} md={12 / field.length} xs={12}>
              <ControlLabel>{input.label + " " + (index + 1)}</ControlLabel>
              {input.input}
            </Col>
          );
        })}
      </FormGroup>
    );
  });
  return formSection;
};
