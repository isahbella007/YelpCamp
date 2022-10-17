import React from "react";
import { useState } from "react";
import logo from "../../assets/Logo.svg";
import hamburgerMenu from "../../assets/Hamburger Menu.svg";
import close from "../../assets/Close.svg";

export const Links = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "Login", url: "/login" },
];

const NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="  top-0 left-0 w-full bg-white">
      <div className="flex  py-3 items-center justify-between px-24 lg:px-0 ">
        <div className="flex flex-row  items-center lg:px-6 ">
          <div>
            <img src={logo}></img>
          </div>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="hidden absolute right-8 cursor-pointer lg:block"
        >
          {open ? <img src={close}></img> : <img src={hamburgerMenu}></img>}
        </div>
        <ul
          className={` flex space-x-4 items-center static z-auto  lg:absolute bg-white  lg:flex-col lg:mb-[-180px] lg:items-start lg:w-full 
            lg:${ open ? " lg:z-auto" : "  lg:z-[-1]"
          }`}
        >
          {Links.map((item) => (
          
              <li
                key={item.id}
                className="lg:my-3 lg:mx-4 lg:text-xl"
              >
                <a href={item.url} className="font-body">
                  {item.name}
                </a>
              </li>
      
          ))}
          <button className=" bg-buttonBgColor text-white font-body px-6 py-3 text-sm rounded  ">
            Create an account
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
