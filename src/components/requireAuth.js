import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComoponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.shouldnaviateAway();
    }
    // component just got updated
    componentDidUpdate() {
      this.shouldnaviateAway();
    }
    shouldnaviateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComoponent);
};
