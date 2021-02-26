import React, { useState } from "react";
// import { FaTimesCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const FaStyle = {
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#8566aa",
  borderRadius: "50%",
  margin: "0 15px 0 35px",
  color: "aliceblue",
  boxShadow: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
};
const ToDoLists = (props) => {
  
  let [onMouseOver, setOnMouseOver] = useState("red");
  //   const deleteItems = () => {};
  const changeBackgroundOnMouseOver = (e) => {
    e.target.style.background = onMouseOver;
  };
  const changeBackgroundOnMouseOut = (e) => {
    setOnMouseOver = FaStyle.backgroundColor;
    e.target.style.background = setOnMouseOver;
  };
  return (
    <>
      <div className="todo_style">
        <FaTimesCircle
          style={FaStyle}
          onMouseOver={changeBackgroundOnMouseOver}
          changeBackgroundOnMouseOut={changeBackgroundOnMouseOut}
          onClick={()=>{
            props.onSelect(props.id)
          }}
        />{" "}
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLists;
