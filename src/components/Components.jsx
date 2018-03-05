import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { Form } from "./Form/Form";
import { formInputs } from "./Form/formInputs"

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
      { componentClass: "input", id: newId++, label: "Input" },
      { componentClass: "select", id: newId++, label: "Component" },
      { componentClass: "input", id: newId++, label: "Event" }
    ]
    newFields.push(formInputs(inputs));
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
