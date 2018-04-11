import React from "react";
import { FormControl } from "react-bootstrap";

export const TextInput = (props) => {
  const { meta } = props;
  const { touched, error, warning } = meta;
  return (
  <div>
    <FormControl {...props.input} {...props} />
  </div>

  )
};
