import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="form-wraper">
      <form className="form">
        <input placeholder="Email"></input>
        <input placeholder="Message" className="msg-input"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
