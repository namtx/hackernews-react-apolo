import React, { Component } from 'react';
import {AUTH_TOKEN} from "../constants";

export default (ProtectedComponent) => {
  return class Authentication extends Component {
    componentWillMount() {
      if (!localStorage.getItem(AUTH_TOKEN)) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!localStorage.getItem(AUTH_TOKEN)) {
        nextProps.history.push('/login');
      }
    }

    render() {
      return <ProtectedComponent {...this.props} />
    }
  }
}
