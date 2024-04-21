// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
dotenv.config({
    path: './env'
})



connectDB()




// import express from "express"
// const app= express();
// //iffi (function that executes immediately)
// // ; is to avoid error
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("ERRR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server started at PORT ${process.env.PORT}`)
//         })

//     }catch(error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()