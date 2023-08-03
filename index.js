// // npm init -y

// const connectToMongo = require("./db");
// const express = require('express')
// // npm install express mongoose cors body-parser

// const express = require("express");
// const mongoose = require("mongoose");
// const port = 3000;
// const app = express();
// app.use(express.json());
// // Use 127.0.0.1 instead of ::1
// const mongoURI = 'mongodb://127.0.0.1:27017/Test';
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log(`Server is listening on port: ${port}`);
//     // Your code here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// connectToMongo();
// const app = express()
// const port =3000;
// app.get('/',(req,res) =>{
// res.send('Hello Abdullah')

// })

// app.listen(port,()=>{
// console.log(`Example app listening at http://localhost:${port}`)

// })

const express = require('express');
const connectToMongo = require("./db");

const app = express();
const port = 3000;

app.get('/', (req, res) => 
  res.send('Hello Abdullah')
);
app.use(express.json())
//routes
app.use('/api/auth', require ('./routes/auth'))
app.use('/api/auth', require ('./routes/notes'))
connectToMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
