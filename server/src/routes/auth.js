import express from "express";
import db_connection from "../config/connection.js";
import { loginValidation, registerValidation } from "../util/authValidation.js";
import jwt from "jsonwebtoken"

const auth = express.Router();

auth.post("/register", (req, res) => {
  // validate the data in the body
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const name = req.body.name;
  const lastName = req.body.lastName;
  const userName = req.body.userName;
  const password = req.body.password;

  db_connection.query(
    "SELECT * FROM users WHERE username = ?",
    [userName],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0)
        return res
          .status(400)
          .send("There is already a user with this username");

      db_connection.query(
        "INSERT INTO users (firstname, lastname,username, password) values (?,?,?,?)",
        [name, lastName, userName, password],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result) return res.status(200).send("Registration Successful");
        }
      );
    }
  );
});

auth.post("/login", (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userName = req.body.userName;
  const password = req.body.password;

  db_connection.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [userName, password],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length>0) {
        console.log(result);
        const token = jwt.sign({
            _id: result[0].id, 
            _userName: result[0].username
        }, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
        res.header('auth-token', token).send({'auth-token': token , isLoggedIn: "true", username: result[0].username})

        
      }else{ 
        res.status(400).send("Credentials are not correct ")
      }
    }
  );
});

export default auth;
