import mongoose from "mongoose";



const UserSchem = new mongoose.Schema({

    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    passwordValid: { type: String },
    name: { type: String, required: true },
    cart: [{
        itemId: { type: String },
        size: { type: String },
        count: { type: Number },
        price: { type: Number },
        picture: { type: String },
        nalic: { type: Number },
        fieldId: {}
    }],
    like: [{ type: String }],
})



export default mongoose.model(`UserSchem`, UserSchem);

