import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        const conn = await  mongoose.connect("mongodb+srv://akashnayak:akashnayak@cluster0.ih45qgu.mongodb.net/",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database is Connected");
    }
    catch(error){
        console.log("Database error:", error);
    }
}

export default connectDB;