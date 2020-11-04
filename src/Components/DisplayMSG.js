import React, { useState } from "react";
import "./DisplayMSG.css";
export default function DisplayMSG() {
  let [ArrayOfMsg, SetArrayOfMsg] = useState([]);
  let [search, SetSearch] = useState("");
  let displaydata = null;
  if (localStorage.getItem("ArrayOfMsg")) {
    displaydata = JSON.parse(localStorage.getItem("ArrayOfMsg")).map((e) => {
      if (e.email.includes(search)) {
        return (
          <div className="row" key={e.email}>
            <img src={e.img}></img>
            <div className="col">
              <div className="email">{e.email}</div>
              <div>{e.message}</div>
            </div>
          </div>
        );
      }
    });
  }
  //   useEffect(() => {
  //     ArrayOfMsg = [...JSON.parse(localStorage.getItem("ArrayOfMsg"))];
  //   });
  return (
    <div className="displayMsg-wraper">
      <input
        placeholder="&#128270; Search"
        onChange={(e) => SetSearch(e.target.value)}
      ></input>
      <div>{displaydata ? displaydata : "LOADING"}</div>
    </div>
  );
}
