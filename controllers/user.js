import User from "../models/user.js";

const createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    address: req.body.address,
    institution: req.body.institution,
    type: req.body.type
  });
  User.findOne({username: req.body.username}, (err, currentUser) => {
    if (err) {
      res.status(500).json();
    } else if (currentUser) {
      res.status(404).json({error: "User already exists"});
    } else {
      user.save((savedErr, savedUser) => {
        if (savedErr) {
          res.status(500).json();
        } else {
          res.status(200).json({id: savedUser.id});
        }
      });
    }
  });
};

const getUser = (req, res) => {
  console.log("got user");
  res.status(200).json();
}

const updateUser = (req, res) => {
  console.log("updated user");
};

const deleteUser = (req, res) => {
  console.log("deleted user");
}

export { createUser, getUser, updateUser, deleteUser };