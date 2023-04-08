// import React, { useState, useEffect } from "react";

// export default function Img() {
//   const [img, setImg] = useState([]);

//   const getData = (req, res) => {
//     // Make an API call to fetch the image URLs
//     fetch("http://localhost:4000/blog/latest")
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the sliderData array with the fetched image URLs
//         const sliderData = data.map((item) => ({
//           image: item.url,
//         }));
//         setImg(sliderData); // Update the state hook with sliderData
//       })
//       .catch((error) => {
//         console.error("Error fetching slider images:", error);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return <>{img}</>; // Return the sliderData array
// }
