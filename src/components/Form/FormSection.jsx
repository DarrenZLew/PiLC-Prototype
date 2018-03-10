import React from "react";
import { Grid, Row } from "react-bootstrap";
import { FieldBody } from "./FieldBody";
import { Header } from "./Header";

export const FormSection = ({ sectionData }) => {
  let formSection = sectionData.fields.map((field, index) => {
    return (
      <FieldBody
        key={sectionData.sectionName + index}
        id={sectionData.sectionName + index}
        componentClass={sectionData.componentClass}
        type={sectionData.fieldtype}
        label={sectionData.fieldtype}
        options={sectionData.options}
      />
    );
  });
  return (
    <Grid>
      <Row>
        <h2>{sectionData.sectionName}</h2>
      </Row>
      <Header
        headerName={sectionData.headerName}
        fieldName={sectionData.fieldName}
      />
      {formSection}
    </Grid>
  );
};
