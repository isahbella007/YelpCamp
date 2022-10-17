import React from 'react'
import logo from "../../assets/Logo.svg"
import { checkMarks, partners } from '../../constants';

const LandingPage = () => {
  return (
    <main className=" h-screen w-screen bg-landingBgColor lg:bg-white">
      <header className=" hidden w-full  lg:block">
        <div className="w-11/12  px-0 py-5 my-0 mx-auto">
          <img src={logo}></img>
        </div>
      </header>

      <section className="flex  w-full h-full lg:flex-col-reverse lg:h-fit">
        <section className="w-7/12  h-full flex justify-center px-0 py-12 lg:w-full  ">
          <div className="w-3/4 lg:w-11/12">
            <div className="w-full lg:hidden">
              <img src={logo}></img>
            </div>

            <div className="w-full h-full flex flex-col  px-0 py-24  gap-y-11 lg:p-0 ">
              <h1 className="text-4xl leading-10 font-body font-bold">
                Explore the best camps on Earth.
              </h1>
              <p className="font-body text-paragraphColor tracking-normal text-lg leading-8">
                YelpCamp is a curated list of the best camping spots on Earth.
                Unfiltered and unbiased reviews.
              </p>

              <ul className="flex flex-col list-none gap-y-2.5">
                {checkMarks.map((item) => (
                  <li
                    className="flex items-center text-paragraphColor gap-x-2.5"
                    key={item.id}
                  >
                    <img src={item.icon}></img>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a href="/home" className = "bg-buttonBgColor w-2/5 rounded p-3 text-center text-white">View Campgrounds</a>

              <div>
                <p className="font-body text-paragraphColor tracking-normal text-lg leading-8 ">
                  Partnered with:{" "}
                </p>
                <ul className="flex flex-row list-none gap-x-2.5">
                  {partners.map((item) => (
                    <li
                      className="flex items-center text-paragraphColor gap-x-2.5"
                      key={item.id}
                    >
                      <img src={item.icon}></img>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className = " w-1/2 bg-hero-desktop bg-no-repeat bg-cover lg:w-full lg:h-96   lg:bg-hero-tab lg:bg-cover lg:bg-no-repeat ">
        </section>
      </section>
    </main>
  );
}

export default LandingPage