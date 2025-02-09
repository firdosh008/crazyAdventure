// src/components/Modal.js
import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ image, onClose }) => {
  console.log("insider modal image is: ", image, typeof image);
  if (!image) return null;

  return (
    <div
      className="modal-overlay bg-black bg-opacity-60 fixed"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] md:min-w-[400px]  md:max-w-[600px]  mx-auto rounded-md flex flex-col justify-center items-center gap-2 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-md w-full h-full object-contain"
        />
        <div className="font-normal text-lg ">{image.title}</div>
        <p>{image?.description}</p>
        <div
          onClick={onClose}
          className="absolute text-white -top-6 -right-6 sm:-top-8 sm:-right-8 text-xl"
        >
          <IoMdClose className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
