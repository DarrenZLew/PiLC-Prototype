import React from "react";
import { SelectInput } from "./SelectInput";
import { TextInput } from "./TextInput";

export const RenderInput = props => {
  switch (props.componentClass) {
    case "select":
      return <SelectInput {...props} />;
    case "input":
      return <TextInput {...props} />;
    default:
      return null;
  }
};
