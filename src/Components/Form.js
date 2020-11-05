import React, { useState, useEffect } from "react";
import faker from "Faker";
import { v4 as uuidv4 } from "uuid";
import DisplayMSG from "./DisplayMSG";
import "./Form.css";
import validator from "validator";
export default function Form() {
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  let [ArrayOfMsg, SetArrayOfMsg] = useState(
    JSON.parse(localStorage.getItem("ArrayOfMsg"))
  );
  const [emailWarning, SetEmailWarning] = useState("");
  const [msgWarning, SetMsgWarning] = useState("");

  console.log(ArrayOfMsg);
  const checkDuplicateEmail = (email) => {
    const dup = ArrayOfMsg.filter((e) => e.email == email);
    if (dup.length == 0) {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length == 0) {
      SetEmailWarning("Enter valid Email");
    }
    if (message.length == 0) {
      SetMsgWarning("Enter message is must!");
    }
    if (!checkDuplicateEmail(email)) {
      SetEmailWarning("Someone useing this Email");
    }
    if (validator.isEmail(email) && message && checkDuplicateEmail(email)) {
      SetEmailWarning("");
      SetMsgWarning("");
      let temp = ArrayOfMsg;
      temp.push({
        email,
        message,
        img: faker.Image.avatar(),
        id: uuidv4(),
      });
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
          <div className="warning">{emailWarning}</div>
          <input
            placeholder="Message"
            className="msg-input"
            onChange={(e) => SetMessage(e.target.value)}
          ></input>
          <div className="warning">{msgWarning}</div>
          <button>Submit</button>
        </form>
      </div>
      <div className="displayMsg">
        <DisplayMSG></DisplayMSG>
      </div>
    </>
  );
}
