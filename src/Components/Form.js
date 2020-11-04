import React, { useState, useEffect } from "react";
import faker from "Faker";
import DisplayMSG from "./DisplayMSG";
import "./Form.css";
export default function Form() {
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  let [ArrayOfMsg, SetArrayOfMsg] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      let temp = ArrayOfMsg;
      temp.push({ email, message, img: faker.Image.avatar() });
      SetArrayOfMsg(temp);
      localStorage.setItem("ArrayOfMsg", JSON.stringify(temp));
    }
  };
  useEffect(() => {
    if (localStorage.getItem("ArrayOfMsg") == null) {
      localStorage.setItem("ArrayOfMsg", JSON.stringify(ArrayOfMsg));
    }
    ArrayOfMsg = [...JSON.parse(localStorage.getItem("ArrayOfMsg"))];
  });
  return (
    <>
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
      <div className="displayMsg">
        <DisplayMSG></DisplayMSG>
      </div>
    </>
  );
}
