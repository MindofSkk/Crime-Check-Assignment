import React, { useState } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const login = () => {
    console.log(typeof(text));
    navigate("/notice")
  };
  return (
    <div className={styles.Home}>
      <h1>Pick a User Name </h1>
      <input
        type="text"
        placeholder="Enter User Name...."
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.btn} onClick={login}>
        Login
      </button>
    </div>
  );
};
