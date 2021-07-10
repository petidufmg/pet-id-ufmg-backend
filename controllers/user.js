import User from "../models/user.js";

const createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    address: req.body.address,
    institution: req.body.institution,
    type: req.body.type,
  });
  User.findOne({ username: req.body.username }, (err, currentUser) => {
    if (err) {
      res.status(500).json();
    } else if (currentUser) {
      res.status(404).json({ error: "User already exists" });
    } else {
      user.save((savedErr, savedUser) => {
        if (savedErr) {
          res.status(500).json();
        } else {
          res.status(200).json({ id: savedUser.id });
        }
      });
    }
  });
};

const getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json(user);
    }
  });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "User updated" });
    }
  });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "User sucessfully deleted" });
    }
  });
};

export { createUser, getUser, updateUser, deleteUser };
