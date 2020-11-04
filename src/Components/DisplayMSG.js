import React from "react";
import "./DisplayMSG.css";
export default function DisplayMSG() {
  let displaydata = null;
  if (localStorage.getItem("ArrayOfMsg")) {
    displaydata = JSON.parse(localStorage.getItem("ArrayOfMsg")).map((e) => {
      return (
        <div className="row">
          <img src={e.img}></img>
          <div className="col">
            <div>{e.email}</div>
            <div>{e.message}</div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="displayMsg">
      <div>
        <input></input>
        <div>{displaydata ? displaydata : "LOADING"}</div>
      </div>
    </div>
  );
}
