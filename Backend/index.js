import express from 'express';
import mongoose from 'mongoose';
import router from './Router.js';
import fileUpload from 'express-fileupload';
import cors from './middleware/cors.middleware.js';

const PORT = 3001;
const DB_URL = `mongodb+srv://Romikr89:Romikrty2000@clusterscam.cwql4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const app = express();
app.use(cors)
app.use(express.static('static'));
app.use(express.json());
app.use(fileUpload({}))
app.use('/api',router)



async function startApp(){
    try{
        await mongoose.connect(DB_URL,{useUnifiedTopology: true , useNewUrlParser: true})
        app.listen(PORT, ()=>{console.log(`SERVER STARTED ON PORT ${PORT}`)})
    }catch(e){
        console.log(e)
    }
}
startApp();
