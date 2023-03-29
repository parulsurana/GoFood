import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>

      <div>
        <Carousel />
      </div>

      <div className="m-3">
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
