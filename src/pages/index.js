import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HomeScreen from "../Components/HomeScreen";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  console.log(isOpen);
  const toggle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeScreen />
    </div>
  );
};

export default Home;
