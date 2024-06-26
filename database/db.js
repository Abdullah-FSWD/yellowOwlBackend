import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-n2twtm2-shard-00-00.fbna2cl.mongodb.net:27017,ac-n2twtm2-shard-00-01.fbna2cl.mongodb.net:27017,ac-n2twtm2-shard-00-02.fbna2cl.mongodb.net:27017/?ssl=true&replicaSet=atlas-2om34m-shard-0&authSource=admin&retryWrites=true&w=majority&appName=yellowOwl`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (err) {
    console.log("error connecting to", err);
  }
};
