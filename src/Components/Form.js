import React, { useState } from "react";
import faker from "Faker";
import "./Form.css";
export default function Form() {
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      if (localStorage) console.log(email, message, faker.Image.avatar());
    }
  };
  return (
    <div className="form-wraper">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Email"
          onChange={(e) => SetEmail(e.target.value)}
        ></input>
        <input
          placeholder="Message"
          className="msg-input"
          onChange={(e) => SetMessage(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
