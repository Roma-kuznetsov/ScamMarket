import mongoose from "mongoose";

const ProductsTShirt = new mongoose.Schema({
    price: { type: Number, required: true },
    picture: { type: String },
    xxsCount: { type: Number },
    xsCount: { type: Number },
    sCount: { type: Number },
    mCount: { type: Number },
    lCount: { type: Number },
    xlCount: { type: Number },
    xxlCount: { type: Number },
})



export default mongoose.model(`ProductsTShirt`, ProductsTShirt);


