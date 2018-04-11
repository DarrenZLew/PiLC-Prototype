import React, { Component } from "react";
import {
  FormGroup,
  Col,
  Row,
  InputGroup,
  Button,
  Glyphicon
} from "react-bootstrap";
import { RenderInput } from "../inputs/RenderInput";
import { Field } from "redux-form";
import { connect } from "react-redux";
import { conditions } from "./fields";
import { reduxForm, change } from "redux-form";

class EventFieldBody extends Component {
  render() {
    const { fields, field, id, inputdata, components } = this.props;
    // Populate components select input with options from component page
    let optionsLabels = Object.values(components).reduce((acc, curr) => {
      curr.forEach(val => acc.push(val.inputOne));
      return acc;
    }, []);
    inputdata[0].options = optionsLabels;

    // Populate Check/Change select input with options from components inputs
    let condFieldsData = Object.entries(conditions);
    let compInputs = fields.getAll();
    let compData = Object.entries(components).find(comp => {
      return comp[1][0].inputOne === compInputs[id].inputOne;
    });
    let conditionIndex = -1;
    if (compData) {
      conditionIndex = condFieldsData.findIndex(
        condition => condition[0] === compData[0]
      );
    }
    console.log(compData);
    if (conditionIndex !== -1) {
      let condChecksOpts = condFieldsData[conditionIndex][1].checksOptions;
      if (compInputs[id] && inputdata[1].options !== condChecksOpts) {
        inputdata[1].options = condChecksOpts;
        // compInputs[id].inputTwo = undefined;
        this.props.changeFieldValue(compInputs[id].inputTwo, undefined)
      }
    }
    // if (compInputs[id].inputTwo) {
    //   Object.entries(condFieldsData[conditionIndex][1].checks).find(
    //     ([k, v]) => {
    //       if (k === compInputs[id].inputTwo) {
    //         if (inputdata[2].name !== v.input) {
    //           compInputs[id].inputThree = undefined;
    //           inputdata[2].name = v.input;
    //         }
    //         if (v.input === "select") {
    //           inputdata[2].options = v.options;
    //         }
    //       }
    //     }
    //   );
    // }
    this.props.changeFieldValue("field", "value")
    return (
      <Row style={{ marginBottom: "0px" }}>
        <FormGroup controlId={field + id}>
          <Col xs={4} style={{ padding: "0px" }}>
            <Field
              name={`${field}.inputOne`}
              inputdata={inputdata[0]}
              componentClass={inputdata[0].name}
              component={RenderInput}
            />
          </Col>
          <Col xs={4} style={{ padding: "0px" }}>
            <Field
              name={`${field}.inputTwo`}
              inputdata={inputdata[1]}
              componentClass={inputdata[1].name}
              component={RenderInput}
            />
          </Col>
          <Col xs={4} style={{ padding: "0px" }}>
            <InputGroup>
              <Field
                name={`${field}.inputThree`}
                inputdata={inputdata[2]}
                componentClass={inputdata[2].name}
                component={RenderInput}
              />
              <InputGroup.Button>
                <Button onClick={() => fields.remove(id)}>
                  <Glyphicon glyph="remove" />
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </Col>
        </FormGroup>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.global
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // This will be passed as a property to the presentational component
    changeFieldValue: function(field, value) {
      console.log("testing", field, value)
      // dispatch(change(form, field, value));
    }
  };
};

EventFieldBody = connect(mapStateToProps, mapDispatchToProps)(EventFieldBody);

// Decorate the form component
export default reduxForm({
  form: "piLC",
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(EventFieldBody);
