import React from "react";
import { useEffect } from "react";
import { getter } from "../../axios/test.js";
import HomeCarousel from "../../components/Carousel";

const Home = () => {
  useEffect(() => {
    getter().then(res => console.log(res))
  });

  return (
    <HomeCarousel />
  )
};

export default Home;
