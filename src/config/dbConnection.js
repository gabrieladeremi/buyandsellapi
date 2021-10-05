import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

let database = mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri = process.env.MONGODB_URI;
  if (database) {
    return;
  }
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = mongoose.connection;
  database.once("open", async () => {
    // eslint-disable-next-line no-console
    console.log("Connected to database");
  });
  database.on("error", () => {
    // eslint-disable-next-line no-console
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
