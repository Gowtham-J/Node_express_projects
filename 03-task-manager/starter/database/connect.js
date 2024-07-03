import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

const uri =
  "mongodb+srv://user:user@cluster0.znzjzj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
export default connectDB;
