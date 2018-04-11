import React, { Component } from "react";
import { Form as BootStrapForm, Grid } from "react-bootstrap";
import EventsForm from "./EventsForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalActions } from "../../actions";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEventModal: false,
      showDeleteEvent: false,
      subFormPage: null,
      eventName: ""
    };
  }

  submit = values => {
    // console.log(values);
    this.submitFormData(values);
  };

  componentDidMount = () => {
    this.props.fetchInitialData("http://localhost:3001/events/", "events");
  };

  handleAddEvent = () => {
    this.props.addEvent(`Event: ${this.state.eventName}`);
    this.setState({
      showEventModal: false,
      eventName: ""
    });
  };

  handleDeleteEvent = () => {
    this.props.deleteEvent(this.state.subFormPage);
    this.setState({
      showDeleteEvent: false,
      eventName: "",
      subFormPage: null
    });
  };

  handleCloseEventModal = () => {
    this.setState({ showEventModal: false });
  };

  handleOpenEventModal = () => {
    this.setState({ showEventModal: true });
  };

  handleOpenDeleteEvent = () => {
    this.setState({ showDeleteEvent: true });
  };

  handleCloseDeleteEvent = () => {
    this.setState({ showDeleteEvent: false });
  };

  handleEventChange = event => {
    this.setState({
      eventName: event,
      subFormPage: this.props.eventOptions.findIndex(option => option === event)
    });
  };

  handleEventNameChange = e => {
    this.setState({ eventName: e.target.value });
  };

  submitFormData(values) {
    let request = "http://localhost:3001/dataEvents/";
    fetch(request, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(values)
    });
  }
  render() {
    // NOTE: component props
    const { handleSubmit } = this.props;
    // NOTE: reducer props
    const { eventOptions, formData } = this.props;
    return (
      <Grid style={{ marginTop: "100px" }}>
        <BootStrapForm onSubmit={handleSubmit(this.submit)}>
          <EventsForm
            formData={formData}
            subFormPage={this.state.subFormPage}
            addEvent={this.handleAddEvent}
            deleteEvent={this.handleDeleteEvent}
            showEventModal={this.state.showEventModal}
            showDeleteEvent={this.state.showDeleteEvent}
            openEventModal={this.handleOpenEventModal}
            openDeleteEvent={this.handleOpenDeleteEvent}
            closeDeleteEvent={this.handleCloseDeleteEvent}
            closeEventModal={this.handleCloseEventModal}
            eventOptions={eventOptions}
            handleEventChange={this.handleEventChange}
            eventName={this.state.eventName}
            handleEventNameChange={this.handleEventNameChange}
          />
        </BootStrapForm>
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
  const { fetchInitialData, addEvent, deleteEvent } = GlobalActions;
  return bindActionCreators(
    { fetchInitialData, addEvent, deleteEvent },
    dispatch
  );
};

Events = connect(mapStateToProps, mapDispatchToProps)(Events);

// Decorate the form component
export default reduxForm({
  form: "piLC",
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(Events);
