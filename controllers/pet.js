import Pet from "../models/pet.js";
import Owner from "../models/owner.js";

const createPet = (req, res) => {
  Owner.findById(req.query.id, (err, owner) => {
    if (err) {
      res.status(500).json();
    } else if (owner) {
      const body = req.body;
      Object.assign(body, { owner: owner });
      Pet.create(body, (petErr, pet) => {
        if (petErr) {
          res.status(500).json();
          console.log(petErr);
        } else {
          res.status(200).json(pet);
        }
      });
    } else {
      res.status(404).json({ error: "Owner not found" });
    }
  });
};

const getPet = (req, res) => {
  Pet.findById(req.params.id, (err, pet) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json(pet);
    }
  });
};

const updatePet = (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "Pet successfully updated." });
    }
  });
};

const deletePet = (req, res) => {
  Pet.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "Pet successfully deleted." });
    }
  });
};

export { createPet, getPet, updatePet, deletePet };
