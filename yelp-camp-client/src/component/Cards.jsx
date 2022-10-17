import React from "react";

const Cards = (props) => {
  return (
    <div className="border-grey-600 border-solid border-2  mb-8  p-2">
      <div className="h-28 w-full ">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={props.image}
        ></img>
      </div>
      <div className=" w-full mt-3 ">
        <h1 className=" text-black font-body font-bold">{props.title}</h1>
      </div>

      <div className = " mt-4 mb-3 w-full">
        <p className = "font-body text-paragraphColor font-medium ">{props.description}</p>
      </div>

      <button className="border-solid border-grey-600 border-2 w-full h-10 text-center font-body font-bold text-black hover:bg-black hover:text-white">
        View Campground
      </button>
    </div>
  );
};

export default Cards;
