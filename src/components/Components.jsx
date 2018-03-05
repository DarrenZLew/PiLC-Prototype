import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { RenderInput } from "./Form/RenderInput";
import { Form } from "./Form/Form";

class Components extends Component {
  state = {
    id: 0,
    fields: []
  };

  componentDidMount = () => {
    this.handleAddField();
  };

  handleAddField = () => {
    let newFields = this.state.fields;
    let newId = this.state.id;
    let inputs = [
      {
        input: <RenderInput type="text" id={newId++} label="Enter Input" />,
        id: newId,
        label: "Input"
      },
      {
        input: <RenderInput type="text" id={newId++} label="Enter Component" />,
        id: newId,
        label: "Component"
      },
      {
        input: <RenderInput type="text" id={newId++} label="Enter Event" />,
        id: newId,
        label: "Event"
      }
    ];
    newFields.push(inputs);
    this.setState({
      fields: newFields,
      id: newId
    });
  };

  render() {
    return (
      <Grid style={{ marginTop: "100px" }}>
        <Form
          sections={["Inputs", "Components", "Events"]}
          fields={this.state.fields}
          handleAddField={this.handleAddField}
        />
      </Grid>
    );
  }
}

export default Components;
