import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json({ limit: "50mb", extended: true }));
server.use(express.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_DB_USER_PASSWORD}@cluster0.r3fkj.mongodb.net/pet-id?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

server.use("/api/v1/", routes);

server.listen(process.env.PORT || 9000, () => {
  console.log(`listening on port ${process.env.PORT || 9000}`);
});
