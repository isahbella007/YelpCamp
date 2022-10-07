import express from "express"
import db_connection from "../config/connection.js"
import { campValidation } from "../util/validation.js"
import routeVerify from "../middleware/verfiyToken.js"

const camps = express.Router()

camps.get("/", (req, res) => { 
    db_connection.query("SELECT * FROM camps", (err, result) => { 
        if(err){ 
            console.log(err);
        }
        if(result.length == 0){ 
            res.send("There are no camps right now...")
        }else{ 
            res.send(result)
        }
    })
})

camps.get("/:id", (req, res) => {
    const id = req.params.id
    db_connection.query("SELECT * FROM camps WHERE camp_id = ?", [id], (error, result) => {
        if(error){ 
            console.log(error);
        }
        if(result.length > 0){ 
            res.send(result)
        }else{ 
            res.send("There is no camp with this id ")
        }
    })
})

camps.post("/add", routeVerify, (req, res) => { 
    const {error} = campValidation(req.body); 
    if(error) return res.status(400).send(error.details[0].message); 

    const userDetails = req.userDetails
    const campName = req.body.campName
    const campPrice = req.body.campPrice
    const image = req.body.image
    const mini_description = req.body.mini_description
    const description = req.body.description

    db_connection.query("INSERT INTO camps (user_id, camp_name, camp_image, mini_description, description, price) values (?,?,?,?,?,?)", [userDetails._id, campName, image, mini_description, description, campPrice ], (error, result) => { 
        if(error){ 
            console.log(error);
        }
        if(result){ 
            res.send("Successfully Added.")
        }
    })
    


})
export default camps