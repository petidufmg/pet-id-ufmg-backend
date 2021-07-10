import Pet from "../models/pet.js";

const createPet = (req, res) => {
  console.log("created pet");
};

const getPet = (req, res) => {
  console.log("got pet");
  res.status(200).json();
}

const updatePet = (req, res) => {
  console.log("updated pet");
};

const deletePet = (req, res) => {
  console.log("deleted pet");
}

export { createPet, getPet, updatePet, deletePet };