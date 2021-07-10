import Pet from "../models/pet.js";
import Owner from "../models/owner.js";

const createPet = (req, res) => {
  const pet = new Pet({
    microchipNumber: req.body.microchipNumber,
    name: req.body.name,
    specie: req.body.specie,
    breed: req.body.breed,
    coat: req.body.coat,
    height: req.body.height,
    age: req.body.age,
    sex: req.body.sex,
    microchippingDate: req.body.microchippingDate,
    captureLocalization: req.body.captureLocalization,
    withdrawalDate: req.body.withdrawalDate,
    sterilizationDate: req.body.sterilizationDate,
    dewormingDates: req.body.dewormingDates,
    vaccinationDates: req.body.vaccinationDates,
    adoptionDate: req.body.adoptionDate,
    deathDate: req.body.deathDate,
    owner: req.body.owner
  });
  console.log(pet);
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