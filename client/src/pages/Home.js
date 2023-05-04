import React, { useContext } from "react";
import ImageSlider from "../components/ImageSlider";
import Overlay from "../components/Overlay";
import About from "../components/About";
import YoutubeEmbed from "../components/YoutubeEmbed";
import About2 from "../components/About2";
import Vision from "../components/Vision";
import Footer from "../components/Footer";
import "../App.css";
import { Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch);
  const navigate = useNavigate();
  const HomeL = () => {
    if (state) {
      return (
        <div>
          <ImageSlider/>
          <Overlay />
          <section id="about-us-section">
            <About />
            <YoutubeEmbed embedId="w0ZC9VyMF6Q" />
            <About2 />
            <Vision />
          </section>
          <Footer />
          <Outlet />
        </div>
      );
    } else {
      return navigate("/");
    }
  };
  return (
    <>
      <HomeL />
    </>
  );
};
export default Home;
