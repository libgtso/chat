import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    );
  }
}

export default LoginForm;
