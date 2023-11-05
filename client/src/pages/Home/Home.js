import React from "react";
import { useEffect } from "react";
import { getter } from "../../axios/test.js";

const Home = () => {
  useEffect(() => {
    getter().then(res => console.log(res))
  });

  return <div>Home</div>;
};

export default Home;
