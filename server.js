import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

dotenv.config();
const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));

mongoose.connect(`mongodb://${process.env.DIR}/pet-id`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

server.use("/api/v1/", routes);

server.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
