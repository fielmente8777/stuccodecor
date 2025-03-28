"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import {
  OutLineBtnNext,
  OutLineBtnPrev,
  ZoomInIcon,
  ZoomOutIcon,
} from "@/icons/icons";

const FullscreenImagePopup1 = ({
  openImgPopup,
  setOpenImgPopup,
  image,
  currentIndex,
}) => {
  const [imgIndex, setImgIndex] = useState(currentIndex);

  const handleNext = useCallback(() => {
    if (imgIndex < image.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  }, [imgIndex, image.length]);

  const handlePrev = useCallback(() => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  }, [imgIndex]);



  useEffect(() => {
    if (typeof currentIndex === "number") {
      setImgIndex(currentIndex);
    }
    if (openImgPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openImgPopup, currentIndex]);

  // const imageSrc = useMemo(() => image[imgIndex], [image, imgIndex]);
  const imageSrc = useMemo(
    () =>
      image && image[imgIndex] ? image[imgIndex] : "/images/placeholder.png",
    [image, imgIndex]
  );

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleKeydown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setOpenImgPopup(false);
      }
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
      if (event.key === "f") {
        toggleFullscreen();
      }
    },
    [setOpenImgPopup, handleNext, handlePrev]
  );

  useEffect(() => {
    if (openImgPopup) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [openImgPopup, handleKeydown]);


  const toggleFullscreen = useCallback(() => {
    const element = document.querySelector(".image-container img");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (element) {
      element.requestFullscreen().catch((err) => console.error(err));
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return (
    <div
      className={`fixed bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${openImgPopup ? "inset-0 opacity-100 scale-100 w-full h-full" : "opacity-0 scale-0 w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-origin-center"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenImgPopup(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenImgPopup(false);
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={() => setOpenImgPopup(false)}
          className="absolute z-50 top-[0.6rem] right-[1.5rem] lg:top-6 lg:right-36 w-8 h-8 lg:w-10 lg:h-10 lg:text-2xl flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
        >
          <IoCloseSharp />
        </button>
        <div className="relative max-width">
          <div
            className="w-full max-w-5xl mx-auto lg:aspect-[4/2.5] aspect-[4/4] relative image-container cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {openImgPopup && (
              <Image
                src={imageSrc ? imageSrc : "/images/placeholder.png"}
                alt={currentIndex}
                fill
                className={`object-cover lg:object-contain ${imageSrc ? "opacity-100 " : "opacity-0 animate-pulse"}`}
                onClick={toggleFullscreen}
              />
            )}
            <span className="absolute bg-clr4/30 p-2 bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-white poppins">
              {imgIndex + 1}/{image.length}
            </span>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button
                className="w-full h-full cursor-pointer flex items-end justify-end bg-clr7/30"
                onClick={toggleFullscreen}
              >
                <span className="p-7 bg-tertiary/70 w-max rounded-md text-slate-50">
                  {isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}
                </span>
              </button>
            </div>
          </div>
          <button
            onClick={handlePrev}
            className={`absolute lg:-left-5 lg:top-[45%] top-[-5rem] filter backdrop:blur-md w-12 aspect-1 rounded-full bg-white text-clr2 flex items-center justify-center disabled:opacity-65 z-10 ${imgIndex <= 0 ? "pointer-events-none bg-black" : ""}`}
          >
            <OutLineBtnPrev />
          </button>
          <button
            onClick={handleNext}
            className={`absolute lg:-right-5 lg:top-[45%] top-[-5rem] max-sm:left-[5rem] filter backdrop:blur-md w-12 aspect-1 rounded-full bg-white text-clr2 flex items-center justify-center disabled:opacity-65 z-10`}
          >
            <OutLineBtnNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenImagePopup1;
