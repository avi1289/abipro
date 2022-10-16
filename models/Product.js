import mongoose from "mongoose";

const producSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mediaUrl:{
        type:String,
        required:true
    }

})

export default mongoose.models.product || mongoose.model('product',producSchema)