import React from "react";
import { FieldGroup } from "./FieldGroup";

export const RenderInput = ({ type, id, label }) => (
  <FieldGroup
    id={"ControlGroup " + id}
    type={type}
    label={label + " " + (id + 1)}
    placeholder={label}
    key={id}
  />
);
