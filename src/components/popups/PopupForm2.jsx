"use client";
import { useEffect, useCallback, useRef } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BookingForm, ContactForm } from "../forms";
import Image from "next/image";
const PopupForm2 = ({ setShowModal2, showModal2 }) => {
  useEffect(() => {
    if (showModal2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setShowModal2, showModal2]);

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${showModal2 ? "inset-0 opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <div className="relative">
          <button
            onClick={() => setShowModal2(false)}
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
                <BookingForm setShowModal2={setShowModal2}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm2;
