import React from "react";
import { useEffect } from "react";
import { getter } from "../../axios/test.js";
import HomeCarousel from "../../components/Carousel";
import CarouselProducts from "../../components/CarouselProducts.js";

const Home = () => {
  useEffect(() => {
    getter().then(res => console.log(res))
  });

  return (
    <>
    <HomeCarousel />
    <CarouselProducts />
    </>
  )
};

export default Home;
