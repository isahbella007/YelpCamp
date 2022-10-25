import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./Home.css"
import {camps} from "../../constants/index"
import Card from '../../component/Card/Card'

const Home = () => {
  return (
    <>
    <div className='homeContainer'>
      <p>Place navbar here</p>

      <div className='welcomeContainer'>
        <div className='welcomeHeader'>
          <h2>Welcome to YelpCamp!</h2>
        </div>
        
        <div className='welcomeText'>
          <p>View our hand-picked campgrounds from all over the world, or add your own</p>
        </div>
        <div className='welcomeForm'>
          <input placeholder='Search for camps...'></input>
          <div className='welcomeButton'>
          
            <p>Search</p> 
          </div>
        </div>
        <div className='welcomeAdd'>
          <u>Or add your own campground</u>
        </div>
      </div>

      <div className='homeCard'>
        {camps.map((item) => (
          <Card 
            image = {item.img}
            campName = {item.name}
            campDescription = {item.description}
            key = {item.id}
          />
        ))}
      </div>
    </div>
        

        
    </>
  )
}

export default Home