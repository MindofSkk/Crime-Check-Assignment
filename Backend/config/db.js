const mongoose = require(`mongoose`);

const dbconnect = () => {
    mongoose.connect(`mongodb+srv://skk:skk123@cluster0.h5brjlh.mongodb.net/?retryWrites=true&w=majority`);
  };
  
module.exports=dbconnect;