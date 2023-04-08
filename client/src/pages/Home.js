import React from "react";
import ImageSlider from "../components/ImageSlider";
import Img  from "../components/sliderData";
import Overlay from "../components/Overlay";
import About from "../components/About";
import YoutubeEmbed from "../components/YoutubeEmbed";
import About2 from "../components/About2";
import Vision from "../components/Vision";
import Footer from "../components/Footer";
import "../App.css"
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <ImageSlider slides={<Img/>} />
      <Overlay />
      <About />
      <YoutubeEmbed embedId="w0ZC9VyMF6Q" />
      <About2 />
      <Vision />
      <Footer />
      <Outlet/>
    </div>
  );
}
