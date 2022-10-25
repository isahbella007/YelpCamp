import React from "react";
import "./Signin.css";
import Logo from "../../assets/Logo.svg";
import { IoIosArrowRoundBack } from "react-icons/io";
import user from "../../assets/User Testimonial.svg";
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate()

  return (
    <section className="signinSection">
      <section className="formSection">
        <div className="details">
          <div className="logo">
            <img src={Logo}></img>
            <div className="back">
              <IoIosArrowRoundBack></IoIosArrowRoundBack>
              <p>
                <span></span>Back to campgrounds
              </p>
            </div>
          </div>

          <div className="exploreCamp">
            <h1>Start exploring camps from all around the world.</h1>
          </div>

          <div className="signinForm">
            <div className="label">
              <label>Username</label>
            </div>
            <div className="input">
              <input placeholder="johndoe_91"></input>
            </div>
            <div className="label">
              <label>Password</label>
            </div>

            <div className="input">
              <input placeholder="Enter Your Password"></input>
            </div>

            <div className="formButton">
              <p>Login</p>
            </div>
          </div>
          <div className="user">
            <p>
              Not a user yet?{" "}
              <span className="create">
                <u onClick={() => {navigate('/register')}}>Create an account</u>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="reviewSection">
        <div className="reviewText">
          <p>
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </p>

          <div className="reviewer">
            <img src={user}></img>
            <div>
              <h1>Mary Andrews</h1>
              <p>Professional Hiker</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signin;
