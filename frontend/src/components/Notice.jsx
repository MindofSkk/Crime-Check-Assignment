import React from "react";
import styles from "./main.module.css";

export const Notice = () => {
  return (
    <div>
      <div className={styles.Noticeboard}>
        <h1> Notice Board</h1>
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          placeholder="Write the notice... ✏️"
        ></textarea>
        <br />
        <button className={styles.btnn}>Post</button>
      </div>
      <div className={styles.Notice}>
        <div className={styles.box}>
          <div> i am trying to make some good things for me i am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for me</div>
          <div className={styles.datetime}>
            <p>username</p>
            <p>date: time</p>
          </div>
        </div>
        <div className={styles.box}>
          <div> i am trying to make some good things for me i am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for mei am trying to make some good things for me</div>
          <div className={styles.datetime}>
            <p>username</p>
            <p>date: time</p>
          </div>
        </div>
      </div>
    </div>
  );
};
