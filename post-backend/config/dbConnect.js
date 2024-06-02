const {default:mongoose}=require("mongoose");
const dbConnect=()=>{
    try {
        const conn=mongoose.connect('mongodb://localhost:27017/Posts');
        console.log("Database connect");
    } catch (error) {
        throw new Error(error);
    }
}
module.exports=dbConnect;