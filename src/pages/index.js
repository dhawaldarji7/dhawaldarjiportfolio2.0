import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HomeScreen from "../Components/HomeScreen";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Background from "../Components/Background";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = ({ data }) => {
  const [isOpen, setisOpen] = useState(false);
  console.log(isOpen);
  const toggle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div onClick={isOpen && toggle}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} data={data.intro} />
      <HomeScreen data={data.intro} />
      <About />
      <Background />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
