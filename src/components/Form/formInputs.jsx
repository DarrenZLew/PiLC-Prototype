import React from "react";
import { RenderInput } from "./RenderInput";

export const formInputs = inputs => {
  let formInputs = inputs.map(input => ({
    input: (
      <RenderInput
        componentClass={input.componentClass}
        id={input.id}
        label={"Enter " + input.label}
      />
    ),
    id: input.id,
    label: input.label
  }));
  return formInputs;
};
