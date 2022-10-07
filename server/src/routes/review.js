import express from "express";
import db_connection from "../config/connection.js";
import routeVerify from "../middleware/verfiyToken.js";
import { reviewValidation } from "../util/validation.js";

const reviews = express.Router();

reviews.get("/:id", (req, res) => {
  const camp_id = req.params.id;
  db_connection.query("SELECT users.firstname, users.lastname, reviews.review, reviews.date_added FROM users inner join reviews ON users.id = reviews.user_id and reviews.camps_id = ?", [camp_id], (error, result) => { 
    if(error){ 
        console.log(error);
    }
    if(result.length > 0){ 
        res.send(result)
    }else{ 
        res.send("Be the first to add a review.")
    }
  })
});


reviews.post("/add", routeVerify, (req, res) => {
  const { error } = reviewValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const camp_id = req.body.camp_id;
  const userId = req.userDetails._id;
  const comment = req.body.comment;
  const date = new Date();

  db_connection.query(
    "INSERT INTO reviews (camps_id, user_id, review, date_added) values(?,?,?,?)",
    [camp_id, userId, comment, date],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result) {
        res.send("Review Added");
      }
    }
  );
});
export default reviews;
