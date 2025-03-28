"use client";
import { useEffect, useCallback, useRef } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ContactForm } from "../forms";
import Image from "next/image";
const PopupForm = ({ setShowModal, showModal }) => {
  // useRef to store intervalId
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 600000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal, showModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);
  

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${showModal ? "inset-0 opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute z-50 md:top-[0.6rem] md:right-[1.5rem] -top-10 right-4 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
          >
            <IoCloseSharp />
          </button>
          <div className="max-w-4xl px-4 mx-auto w-full  h-full">
            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center bg-bgclr md:p-12 max-sm:px-4 py-4 shadow-lg">
              <div className="w-full relative lg:aspect-[4/3] lg:block hidden my-auto">
                <Image
                  src="/icons/GIF4.gif"
                  alt="partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full">
                <ContactForm setShowModal={setShowModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
