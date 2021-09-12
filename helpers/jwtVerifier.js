import jwt from "jsonwebtoken";

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    console.log("jwt error")
    return res.status(401).json({ auth: false, message: "No token provided." });}

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(token);
      console.log("error here")
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token" });}
    req.userId = decoded.id;
    next();
  });
}

export default verifyJWT;
