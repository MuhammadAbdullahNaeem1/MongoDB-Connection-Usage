// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017"

// const connectToMongo = ()=>{

// mongoose.connect(mongoURI,()=>{
//     console.log("Connection Successful");
// })

// }
// module.exports = connectToMongo; 

const mongoose = require("mongoose");

const connectToMongo = () => {
  const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';
  
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to MongoDB');
        resolve();
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        reject(error);
      });
  });
};

module.exports = connectToMongo;
