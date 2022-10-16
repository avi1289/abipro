import mongoose from "mongoose";

function initDB()
{
    if(mongoose.connections[0].readyState){
        console.log("Already connected")
        return
    }
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connect',()=>{
        console.log("conneced to mongo")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("conneced to mongo",err)
    })
}

export default initDB