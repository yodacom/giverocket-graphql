import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/auctions");

mongoose.connection
  .once("open", () => console.log("Mongodb is connected"))
  .on("error", err => {
    throw err;
  });
