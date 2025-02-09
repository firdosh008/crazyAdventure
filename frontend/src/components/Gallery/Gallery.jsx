// src/components/Gallery.js
import React, { useEffect, useState } from "react";
import Modal from "../utils/Modal";
import trekImages from "../../assets/assets";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: trekImages?.HarKiDunImage,
      alt: "Har Ki Dun Trek",
      title: "Har Ki Dun Trek",
    },
    {
      src: trekImages?.BaliPassTrek,
      alt: "Bali Pass Trek",
      title: "Bali Pass Trek",
    },
    {
      src: trekImages?.BharamtalTrek,
      alt: "Brahmatal Trek",
      title: "Brahmatal Trek",
    },
    {
      src: trekImages?.CharDhamYatra,
      alt: "Char Dham Yatra",
      title: "Char Dham Yatra",
    },
    {
      src: trekImages?.DyaraBugyalTrek,
      alt: "Dayara Bugyal Trek",
      title: "Dayara Bugyal Trek",
    },
    {
      src: trekImages?.DeoriaBugyalTrek,
      alt: "Deoria Tal Chopta Chandrashila Trek",
      title: "Deoria Tal Chopta Chandrashila Trek",
    },
    {
      src: trekImages?.DoDhamYatra,
      alt: "Do Dham Yatra",
      title: "Do Dham Yatra",
    },
    {
      src: trekImages?.GaumukhTapovanTrek,
      alt: "Gaumukh Tapovan Trek",
      title: "Gaumukh Tapovan Trek",
    },
    {
      src: trekImages?.HarKiDunTrekThum,
      alt: "Har Ki Dun Trek Thum",
      title: "Har Ki Dun Trek Thum",
    },
    {
      src: trekImages?.HimachalTrek,
      alt: "Himachal Trek",
      title: "Himachal Trek",
    },
    {
      src: trekImages?.jammuKashMirTrek,
      alt: "Jammu Kashmir Trek",
      title: "Jammu Kashmir Trek",
    },
    {
      src: trekImages?.KedarkanthaTrekImage,
      alt: "Kedarkantha Trek",
      title: "Kedarkantha Trek",
    },
    {
      src: trekImages?.lehLadakh,
      alt: "Leh Ladakh Trek",
      title: "Leh Ladakh Trek",
    },
    {
      src: trekImages?.spitiValleyTrek,
      alt: "Spiti Valley Trek",
      title: "Spiti Valley Trek",
    },
    {
      src: trekImages?.UttarakhandTrek,
      alt: "Uttarakhand Trek",
      title: "Uttarakhand Trek",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    console.log("selected image is useeffect: ", selectedImage);
  }, [selectedImage]);

  return (
    <div>
      <div className="gallery-container mt-[200px] relative font-inter">
        {images?.map((image, index) => {
          return (
            <div
              key={index}
              className="max-h-[250px] min-h-[250px] relative group rounded-md"
              onClick={() => {
                openModal(image);
                console.log("image clicked is: ", image);
              }}
            >
              <img
                src={image?.src}
                alt={image?.alt}
                className="h-full w-full object-cover object-center rounded-md"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-20 text-white h-[40px] w-full overflow-hidden text-center py-2 truncate px-4 font-normal group-hover:h-full transition-all duration-500 ease-in-out flex items-end justify-center">
                {image?.title}
              </div>
            </div>
          );
        })}
      </div>

      <Modal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default Gallery;
