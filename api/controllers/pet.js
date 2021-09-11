import Pet from "../models/pet.js";
import User from "../models/user.js";
import Owner from "../models/owner.js";

const checkUserType = (req, res) => {
  User.findOne({ userId: req.headers["user-id"] }, (err, user) => {
    if (err) {
      res.status(500).json({ message: "error in server" });
    }
    switch (user.type) {
      case 0:
        res.status(404).json({ message: "User not authorized" });
        break;
      case 1:
      case 2:
      case 3:
        break;
      default:
        res.status(401).json({ message: "User not authorized" });
    }
  });
};

const checkUserTypeForOwnerRGandCPF = (req, res) => {
  User.findOne({ userId: req.headers["user-id"] }, (err, user) => {
    if (err) {
      res.status(500).json({ message: "error in server" });
    } else if (user) {
      if (user.type !== 3) {
        res.status(401).json({ message: "User not authorized" });
      }
    }
  });
};

const createPet = (req, res) => {
  checkUserType(req, res);
  User.findOne({ userId: req.query.id }, (err, user) => {
    if (err) {
      res.status(500).json("find user has error");
    } else if (user) {
      const body = req.body;
      const ownerData = req.body.owner;
      Owner.create(ownerData, (ownerErr, owner) => {
        if (ownerErr) {
          res.status(500).json("create owner has error");
        } else {
          Object.assign(body, { owner: owner, createdBy: user });
          Pet.create(body, (petErr, pet) => {
            if (petErr) {
              res.status(500).json("create pet has error");
            } else {
              res.status(200).json(pet);
            }
          });
        }
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
};

const getPet = (req, res) => {
  Pet.find({ microchipNumber: req.params.id }, (err, pet) => {
    if (err) {
      res.status(500).json();
    } else {
      delete pet.owner;
      res.status(200).json(pet);
    }
  });
};

const getPetWithOwner = (req, res) => {
  Pet.find({ microchipNumber: req.params.id })
    .populate("owner")
    .exec((err, pet) => {
      if (err) {
        res.status(500).json();
      } else {
        delete pet.rg;
        delete pet.cpf;
        res.status(200).json(pet);
      }
    });
};

const getPetWithOwnerRGAndCPF = (req, res) => {
  checkUserTypeForOwnerRGandCPF(req, res);
  Pet.find({ microchipNumber: req.params.id })
    .populate("owner")
    .exec((err, pet) => {
      if (err) {
        res.status(500).json();
      } else {
        res.status(200).json(pet);
      }
    });
};

const updatePet = (req, res) => {
  checkUserType(req, res);
  Pet.findOneAndUpdate({ microchipNumber: req.params.id }, req.body, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "Pet successfully updated." });
    }
  });
};

const deletePet = (req, res) => {
  checkUserType(req, res);
  Pet.findOneAndDelete({ microchipNumber: req.params.id }, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "Pet successfully deleted." });
    }
  });
};

export {
  createPet,
  getPet,
  getPetWithOwner,
  getPetWithOwnerRGAndCPF,
  updatePet,
  deletePet,
};
