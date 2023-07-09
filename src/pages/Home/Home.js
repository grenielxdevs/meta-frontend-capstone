import React from "react";
import Visuals from "../Sections/Visuals/Visuals";
import SpecialMenu from "../Sections/SpecialMenu/SpecialMenu";
import Reviews from "../Sections/Reviews/Reviews";
import About from "../Sections/About/About";

const Home = () => {
  return (
    <>
      <Visuals />
      <SpecialMenu />
      <Reviews />
      <About />
    </>
  );
};
export default Home;
