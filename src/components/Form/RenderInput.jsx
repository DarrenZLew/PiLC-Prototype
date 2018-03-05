import React from "react";
import { FieldGroup } from "./FieldGroup";

export const RenderInput = ({ componentClass, id, label }) => (
  <FieldGroup
    id={"ControlGroup " + id}
    componentClass={componentClass}
    label={label + " " + (id + 1)}
    placeholder={label}
    key={id}
  />
);
