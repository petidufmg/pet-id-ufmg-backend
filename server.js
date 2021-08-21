import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import passport from "passport";
import googleStrategy from "passport-google-oauth20";
import cors from "cors";

dotenv.config();
const GoogleStrategy = googleStrategy.Strategy;
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

mongoose.connect(`mongodb://${process.env.DIR}/pet-id`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

server.use("/api/v1/", routes);
server.use(passport.initialize());

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/home"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

server.listen(process.env.PORT || 9000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
