import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import logo from "../../assets/Logo.svg";
import Cards from "../../component/Cards";
import ulap from "../../assets/Camp Images/High Quality Images/Buloy Springs.jpg"
import islands from "../../assets/Camp Images/High Quality Images/Calagus Islands.jpg"

const HomePage = () => {
  let card = [
    {
      id: 1,
      img: ulap,
      title: "Mount Ulap",
      description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
    },
    {
      id: 2,
      img: islands,
      title: "Calaguas Islands",
      description: "A paradise of islands that can rival the white sand beauty of Boracay."
    },
    {
      id: 3,
      img: ulap,
      title: "Mount Ulap",
      description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
    },
    {
      id: 4,
      img: islands,
      title: "Calaguas Islands",
      description: "A paradise of islands that can rival the white sand beauty of Boracay."
    },
    {
      id: 5,
      img: ulap,
      title: "Mount Ulap",
      description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
    },
    {
      id: 6,
      img: islands,
      title: "Calaguas Islands",
      description: "A paradise of islands that can rival the white sand beauty of Boracay."
    },

  ];
  return (
    <>
      <div className="  h-screen">
        <div className="lg:hidden">
          <NavBar />
        </div>
     
        <div className="px-24 mt-[40px] lg:px-2">
          <div className="p-10 h-fit w-full bg-searchColor ">
            <div className=" mb-3">
              <h1 className="text-4xl leading-10 font-body font-bold">
                Welcome to YelpCamp!
              </h1>
            </div>

            <div className=" w-1/3 mb-3 lg:w-[80%]">
              <p className="font-body text-paragraphColor">
                View our hand-picked campgrounds from all over the world, or add
                your own.
              </p>
            </div>

            <div className=" w-1/3 mb-3 lg:w-fit">
              <form>
                <input className="h-[50px] w-[60%] rounded " placeholder="Enter camp name"></input>
                <button className="bg-black text-white ml-4 h-[50px] w-[30%] rounded font-body">
                  Search
                </button>
              </form>
            </div>

            <div>
              <u className="font-body text-paragraphColor">
                <a href = "/">Or add your own campground</a>
              </u>
            </div>
          </div>

          <div className=" grid gap-8 grid-cols-auto col-autoColumn mt-8">
            {card.map((item) => (
              <Cards key={item.id} image={item.img} title = {item.title} description = {item.description} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
