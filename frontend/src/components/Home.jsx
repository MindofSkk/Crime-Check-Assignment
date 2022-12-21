import React, { useState } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const login = () => {


    if(text)
    {
      localStorage.setItem("name", text);
      navigate("/notice");
    }else{
      alert("Enter the User Name")
    }
  
  };
  return (
    <div className={styles.Home}>
      <h1>Pick a User Name </h1>
      <input
        type="text"
        placeholder="Enter User Name...."
        
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <br />
      <button className={styles.btn} onClick={login}>
        Login
      </button>
    </div>
  );
};
