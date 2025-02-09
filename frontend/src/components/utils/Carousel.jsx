// import React, { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "bootstrap";
// import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";

// const CarouselComponent = () => {
//   const carouselRef = useRef(null);

//   React.useEffect(() => {
//     const carousel = new Carousel(carouselRef.current, {
//       interval: 3000,
//       pause: "hover",
//     });

//     return () => {
//       carousel.dispose();
//     };
//   }, []);

//   const handlePrev = () => {
//     const carousel = Carousel.getInstance(carouselRef.current);
//     carousel.prev();
//   };

//   const handleNext = () => {
//     const carousel = Carousel.getInstance(carouselRef.current);
//     carousel.next();
//   };

//   return (
//     <div className="w-[70%]">
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide w-full"
//         data-bs-ride="carousel"
//         ref={carouselRef}
//       >
//         <ol className="carousel-indicators">
//           <li
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//           ></li>
//           <li
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//           ></li>
//           <li
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//           ></li>
//         </ol>
//         <div className="carousel-inner w-full">
//           <div className="carousel-item active w-full">
//             <img
//               className="w-full object-cover object-center"
//               src={kedarnathTrek}
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item w-full">
//             <img
//               className="w-full object-cover object-center"
//               src={kedarnathTrek}
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item w-full">
//             <img
//               className="w-full object-cover object-center"
//               src={kedarnathTrek}
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           onClick={handlePrev}
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           onClick={handleNext}
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;
