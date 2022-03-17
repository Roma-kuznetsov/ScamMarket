import mongoose from "mongoose";



const UserSchem = new mongoose.Schema({

    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    passwordValid: { type: String },
    name: { type: String, required: true },
    cart: [{ type: String }],
    like: [{ type: String }],



})


export default mongoose.model(`UserSchem`, UserSchem);

