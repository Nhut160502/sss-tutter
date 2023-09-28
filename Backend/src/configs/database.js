import mongoose from "mongoose";
import 'dotenv/config'

export const connectDatabase = () =>{
mongoose.connect(process.env.DATABASE_URL).then(() =>{
    console.log("Connect database successfully!");
}).catch((err) => {
    console.log(err);
})
}