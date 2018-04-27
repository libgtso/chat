import React, { Component } from "react";
import LoginForm from "./components/composite/LoginForm";
import "./Auth.scss";

class Auth extends Component {
  render() {
    return (
      <div className="auth-window">
        <span className="auth-header">Введите сюда ваши блядские данные</span>
        <form className="auth-form">
          {this.auth_data.map(({ type, placeholder }) => (
            <LoginForm type={type} placeholder={placeholder} />
          ))}
          <button type="submit">Отправьте это говно</button>
        </form>
      </div>
    );
  }

  auth_data = [
    {
      type: "text",
      placeholder: "Зополните это логин"
    },
    {
      type: "password",
      placeholder: "В ведите пороль"
    }
  ];
}

export default Auth;
