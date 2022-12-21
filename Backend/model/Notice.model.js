const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  name: String,
  notice: String,
  date: {
    type: String,
    default: null,
  },
  time: {
    type: String,
    default: null,
  },
 
});
module.exports = mongoose.model("notice", NoticeSchema);
