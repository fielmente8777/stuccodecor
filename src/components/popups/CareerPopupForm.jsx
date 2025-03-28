"use client";
import { useEffect, useCallback, useRef } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CareerForm } from "../forms";
import Image from "next/image";
const CareerPopupForm = ({ careerModal, setCareerModal }) => {
  useEffect(() => {
    if (careerModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [careerModal]);

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${careerModal ? "inset-0 opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <div className="relative">
          <button
            onClick={() => setCareerModal(false)}
            className="absolute z-50 md:top-[0.6rem] md:right-[1.5rem] -top-10 right-4 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
          >
            <IoCloseSharp />
          </button>
          <div className="px-4 mx-auto w-full  h-full">
            <div className="w-full max-w-6xl mx-auto  bg-bgclr md:p-12 max-sm:px-4 py-4 shadow-lg">
              <div className="w-full">
                <CareerForm setCareerModal={setCareerModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPopupForm;
