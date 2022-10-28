import React from "react";
import Login from "../login/Login";
import "./Form.css";

const Form = () => {
  return (
    <div className="formPage">
      <div className="inner-wrapper">
        <div className="form">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Form;
