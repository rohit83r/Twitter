const express= require('express');
const app=express();
const connect=require('./config/database');
const PORT=3000;

const Tweet =require('./models/tweet');

app.listen(PORT,async ()=>{
    console.log(`Server started at ${PORT}`);
    await connect();
    console.log('Mongo db connected');    
    const tweet = await Tweet.create({
        content:'third Tweet',
        userEmail:'erdb@dt.in'
    })
    console.log(tweet);

})