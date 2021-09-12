import Owner from "../models/owner.js";

const createOwner = (req, res) => {
  const owner = new Owner({
    name: req.body.name,
    rg: req.body.rg,
    cpf: req.body.cpf,
    address: req.body.address,
    telephones: req.body.telephones,
  });
  Owner.create(owner, (err, createdOwner) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ id: createdOwner.id });
    }
  });
};

const getOwner = (req, res) => {
  Owner.findById(req.params.id, (err, owner) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json(owner);
    }
  });
};

const updateOwner = (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({ message: "Owner successfully updated." });
    }
  });
};

const deleteOwner = (req, res) => {
  Owner.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json();
    } else {
      res.status(200).json({message: "Owner successfully deleted."})
    }
  });
};

export { createOwner, getOwner, updateOwner, deleteOwner };
