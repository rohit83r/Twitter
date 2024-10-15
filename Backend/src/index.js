const express= require('express');
const app=express();
const connect=require('./config/database');

app.listen(PORT,async ()=>{
    console.log(`Server started at ${PORT}`);
    await connect();
    console.log('Mongo db connected');    
    
})  