import User from "../models/user.js";
import googleAuth from "google-auth-library";
import jwt from "jsonwebtoken";

const createUser = (data, res) => {
  const user = new User({
    username: data.username,
    name: data.name,
    userId: data.userId,
    type: data.type,
  });
  User.findOne({ username: user.username }, (err, currentUser) => {
    if (err) {
      res.status(500).json("error in find username");
    } else if (currentUser) {
      res.status(200).json({ auth: true, token: data.token, id: user.userId, type: user.type });
    } else {
      user.save((savedErr, savedUser) => {
        if (savedErr) {
          res.status(500).json();
        } else {
          console.log(savedUser);
          res.status(200).json({ auth: true, token: data.token, id: user.userId, type: user.type });
        }
      });
    }
  });
};

const getUser = (req, res) => {
  User.findOne({ userId: req.params.id }, (err, user) => {
    if (err) {
      res.status(500).json("user not found");
    } else {
      res.status(200).json(user);
    }
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ userId: req.params.id }, req.body, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "User successfully updated." });
    }
  });
};

const deleteUser = (req, res) => {
  User.findOneAndDelete({ userId: req.params.id }, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "User sucessfully deleted." });
    }
  });
};

const authenticateWithGoogle = (req, res) => {
  const { OAuth2Client } = googleAuth;
  const client = new OAuth2Client(process.env.CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload["sub"];
    const email = payload["email"];
    const firstName = payload["given_name"];
    const lastName = payload["family_name"];
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: 300 * 12,
    });
    console.log(token);
    createUser({
      username: email,
      name: { firstName: firstName, lastName: lastName },
      userId: userId,
      type: 0,
      token: token
    }, res);
    //res.json({ auth: true, token: token });
  }
  verify().catch(console.error);
  // res.status(500).json({ message: "Login inválido"});
};

const checkTokenIsValid = (req, res) => {
  res.status(200).json({ message: "ok"});
};

export { createUser, getUser, updateUser, deleteUser, authenticateWithGoogle, checkTokenIsValid };
