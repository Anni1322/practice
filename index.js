const mongoose= require('mongoose');
const express = require('express');
const app = express();


// DB_URI = mongodb+srv:'//mongodatabase:Anni%40222@cluster0.jo9kwuc.mongodb.net/emailauth'
mongoose.connect('mongodb://0.0.0.0:27017/emailauth');

// for user routes
const userRoute = require('./routes/userRoute')
app.use('/',userRoute);

// for admin routes
const adminRoute = require('./routes/adminRoute')
app.use('/admin',adminRoute);

app.listen(3000,function () {
    console.log("server is runnig...... Port 3000");
    
})
