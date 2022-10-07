import jwt from "jsonwebtoken";

const routeVerify = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Access Denied!")

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userDetails = verified;
    // console.log(req.userDetails);
    next()
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
export default routeVerify;
