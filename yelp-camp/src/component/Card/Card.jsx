import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='cardContainer'>
        <div className='cardImage'>
            <img src={props.image}></img>
        </div>
        <div className='cardName'>
            <h3>{props.campName}</h3>
        </div>
        <div className='cardDescription'>
            <p>{props.campDescription}</p>
        </div>
        <div className='cardButton'>
            <p>View Campground</p>
        </div>
    </div>
  )
}

export default Card