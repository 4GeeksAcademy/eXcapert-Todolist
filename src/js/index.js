//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function ToDoList() {
  const [currentListItems, setListItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  let placeholderText = "What needs to be done?";

  return (
    <div className="container-sm">
      <div className="fs-1 justify-content-center d-flex">To Do List</div>
      <div>
        <input
          className="form-control rounded-0 border-bottom-0"
          placeholder={placeholderText}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue != "") {
              setListItems(currentListItems.concat(inputValue));
              setInputValue("");
            }
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        {console.log(inputValue)}
      </div>
      <ul className="list-group rounded-0 ">
        {currentListItems.map((item, idx) => (
          <li className="list-group-item">
            {item}
            <button
              type="button"
              className={"btn btn-sm float-end m-0 p-0 text-secondary"}
              onClick={() =>
                setListItems(
                  currentListItems.filter((t, currentIdx) => idx != currentIdx)
                )
              }
            >
              X
            </button>
          </li>
        ))}
        <div>
          <div className="border p-2">
            <small className="text-body-secondary">
              {currentListItems.length > 0
                ? currentListItems.length + " Left"
                : "No tasks, add a task"}
            </small>
          </div>
          <div className="stack1 d-flex border border-top-0"></div>
          <div className="stack2 d-flex border border-top-0"></div>
        </div>
      </ul>
    </div>
  );
}

//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
