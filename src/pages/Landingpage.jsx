import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider";

const Landingpage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Landingpage;
