import React, { Component } from "react";
import {
  Grid,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import { FormSection } from "./Form/FormSection";
import { FieldGroup } from "./Form/FieldGroup";

class Components extends Component {
  state = {
    id: 0,
    fields: []
  };

  componentDidMount = () => {
    this.handleAddField();
  }

  handleAddField = () => {
    let newFields = this.state.fields;
    let newId = this.state.id;
    newFields.push(<FieldGroup
      id={"ControlGroup " + newId}
      type="text"
      label={"Input " + (newId + 1)}
      placeholder="Enter Input"
      key={newId}
    />)
    this.setState({
      fields: newFields,
      id: ++newId
    })
  };

  render() {
    return (
      <Grid style={{ marginTop: "100px" }}>
        <Form horizontal>
          <Col xs={6}>
            <h2>Inputs</h2>
          </Col>
          <Col xs={6}>
            <h2>Components</h2>
          </Col>
          <FormSection fields={this.state.fields} />
          <Button onClick={this.handleAddField}>Add Input</Button>
        </Form>
      </Grid>
    );
  }
}

export default Components;
