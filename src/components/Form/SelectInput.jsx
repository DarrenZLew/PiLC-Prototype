import React from "react";
import { FormControl } from "react-bootstrap";

export const SelectInput = props => {
  const { options } = props;
  let items = options.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return <FormControl {...props}>{items}</FormControl>;
};
