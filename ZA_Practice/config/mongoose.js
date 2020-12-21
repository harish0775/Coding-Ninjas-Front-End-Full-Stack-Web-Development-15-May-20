const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Robo3T');
const db= mongoose.connection;
db.on('error',console.error.bind(console,"error is connecting to MongoDB"));
db.once('open',function(){
    console.log('Connected to ::MongooseDataBase');
});
module.exports= db;