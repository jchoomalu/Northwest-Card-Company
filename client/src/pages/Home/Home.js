import React from "react";
import { useEffect } from "react";
import { getter } from "../../axios/test.js";
import HomeCarousel from "../../components/Carousel";
import ProductSlider from "../../components/ProductSlider/ProductSlider.js";
const Home = () => {
  useEffect(() => {
    getter().then(res => console.log(res))
  });

  return (
    <>
    <HomeCarousel />
    <ProductSlider />
    </>

  )
};

export default Home;
