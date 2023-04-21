import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/blog/latest")
      .then((response) => setImages(response.data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    
                
    <Carousel {...settings}>
      {images.map((image, index) => (
        <Link to = {`/blog/${image._id}`}>
        <Wrap key={index}>
          <img src={image.url} alt="Featured" />
          <TextOverlay>
            <Text>Featured</Text>
            <div>
            <Text1><h2>{image.title}</h2></Text1>
            <Text2>{image.desc}</Text2>
            </div>
            
          </TextOverlay>
        </Wrap>
         </Link>
      ))}
    </Carousel>
   
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  // margin-top:20px;
  overflow: hidden;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 400px;
    opacity: 1;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 200ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column; /* Update to display texts in a column */
  z-index: 2;
  /* Set z-index higher than image to overlay on top */
  background-color: rgba(0, 0, 0, 0.5); /* Set background color to black with 50% opacity */
`;

const Text = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 8px; /* Add margin bottom to separate texts */

`;

const Text1 = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top:150px;
`;

const Text2 = styled.p`
  color: #fff;
  font-size: 16px;
  max-width:800px;
`;
