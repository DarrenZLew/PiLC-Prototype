import React, { Component } from "react";
import { Form as BSForm, Grid, Button, Row } from "react-bootstrap";
import { Form } from "../Form/Form";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalActions } from "../../actions";

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = values => {
    let components = Object.entries(values).reduce((acc, curr) => {
      if (curr[0].includes("components")) {
        acc[curr[0].replace("components 0 -  ", "")] = curr[1]
      }
      return acc;
    }, {})
    this.props.setEventComponents(components);
    // this.submitFormData(values);
  };
  componentDidMount() {
    this.props.fetchInitialData(
      "http://localhost:3001/components/",
      "components"
    );
  }

  submitFormData(values) {
    let request = "http://localhost:3001/dataComponents/";
    fetch(request, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ values, id: 6 })
    });
  }

  render() {
    // NOTE: component props
    const { handleSubmit } = this.props;
    // NOTE: reducer props
    const { initialComponentData } = this.props;
    return (
      <Grid style={{ marginTop: "100px" }}>
        <BSForm onSubmit={handleSubmit(this.submit)}>
          <Grid>
            <Row>
              <Button
                bsStyle="primary"
                style={{ padding: "20px", fontSize: "1.5em" }}
                block
                type="submit"
              >
                Submit Components
              </Button>
            </Row>
          </Grid>
          <Form
            formData={initialComponentData}
            name="components"
            subFormPage={0}
          />
        </BSForm>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.global
  };
};

const mapDispatchToProps = dispatch => {
  const { fetchInitialData, setEventComponents } = GlobalActions;
  return bindActionCreators({ fetchInitialData, setEventComponents }, dispatch);
};

Components = connect(mapStateToProps, mapDispatchToProps)(Components);

// Decorate the form component
export default reduxForm({
  form: "piLC",
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(Components);
