const mongoose = require('mongoose');

//const mongodb = require('mongodb').MongoClient

mongoose.connect('mongodb://localhost:27017/Edureka')
.then(client => {
    console.log("Connected successfully...")
})
.catch(error => {
    console.log(error)
})



// mongodb.connect('mongodb://localhost:27017/Edureka')
//   .then(client => {
//     console.log('Connected!');
//     client.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

const Course = require('./course.model')