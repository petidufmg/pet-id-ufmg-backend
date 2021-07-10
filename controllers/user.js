import User from "../models/user.js";

const createUser = (req, res) => {
  console.log("created user");
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