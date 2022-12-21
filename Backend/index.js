const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const dbconnect = require("./config/db");
const noticemodel = require("./model/Notice.model");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.send("Welcome to Crime Check ");
});

app.get("/notice", async (req, res) => {
  const data = await noticemodel.find();
  res.send(data);
});
app.post("/notice", async (req, res) => {
  try {
    const timedata = new Date();

    const time =
      timedata.getHours() +
      ":" +
      timedata.getMinutes() +
      ":" +
      timedata.getSeconds();
    const date =
      timedata.getFullYear() +
      "-" +
      (timedata.getMonth() + 1) +
      "-" +
      timedata.getDate();

    const { name, notice } = req.body;

    const data = await noticemodel.create({
      name,
      notice,
      date: date,
      time: time,
    });
    // console.log(data);
    return res.status(200).send(data);
  } catch (err) {
    // console.log(err)
    res.status(400).send({ message: err.message });
  }
});

app.listen(process.env.PORT, async() => {
  try {
    await dbconnect();
    console.log("Backend Start");
  } catch (err) {
    console.log("error", err);
  }
});
