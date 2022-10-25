import React from 'react'
import Logo from "../../assets/Logo.svg";
import checkmarks from "../../assets/Checkmark.svg"
import airbnb from "../../assets/Airbnb.svg"
import booking from "../../assets/Booking.svg"
import plumGuide from "../../assets/Plum Guide.svg"
import "./Landing.css"; 
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    let navigate = useNavigate()
    const goToHome = () => { 
        navigate("/home")

    }
  return (
    <main className='main'>
        <header className = "mobile-image-header">
            <div className='mobile-image-container'>
                <img src={Logo}></img>
            </div>
        </header>

        <section className='mainSection'>
            <section className='imageSection'>
            </section>
            <section className='textSection'>
                <div className='texts'>
                    <div className='desktop-logo'>
                        <img src={Logo}></img>
                    </div>

                    <div className='explore'>
                        <h1>Explore the best camps on Earth.</h1>
                    </div>

                    <div className = "description">
                        <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    </div>
                    
                    <div className='keyPoints'>
                        <div className = "checkMark">
                            <img src={checkmarks}></img>
                            <p>Add your own camp suggestions</p>
                        </div> 
                        <div className = "checkMark">
                            <img src={checkmarks}></img>
                            <p>Leave reviews and experiences</p>
                        </div> 
                        <div className = "checkMark">
                            <img src={checkmarks}></img>
                            <p>See locations for all camps</p>
                        </div> 
                    </div>

                    <div className='button' onClick={goToHome}>
                        <p>View Campgrounds</p>
                    </div>

                    <p className='partner'>Partnered with:</p>
                    <div className='partnered'>
                        
                        <div className='partners'>
                            <img src={airbnb}></img>
                        </div>
                        <div className='partners'>
                            <img src={booking}></img>
                        </div>
                        <div className='partners'>
                            <img src={plumGuide}></img>
                        </div>
                           
                        
                    </div>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Landing