import Owner from "../models/owner.js";

const createOwner = (req, res) => {
  console.log("created owner");
};

const getOwner = (req, res) => {
  console.log("got owner");
  res.status(200).json();
}

const updateOwner = (req, res) => {
  console.log("updated owner");
};

const deleteOwner = (req, res) => {
  console.log("deleted owner");
}

export { createOwner, getOwner, updateOwner, deleteOwner };