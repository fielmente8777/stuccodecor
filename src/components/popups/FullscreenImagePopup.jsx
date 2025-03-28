"use client";
import { useEffect, useState, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { ZoomInIcon, ZoomOutIcon } from "@/icons/icons";
import Link from "next/link";

const FullscreenImagePopup = ({
  openImgPopup,
  setOpenImgPopup,
  image,
  url,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (openImgPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openImgPopup]);

  const handleKeydown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setOpenImgPopup(false);
      }
      if (event.key === "f") {
        toggleFullscreen();
      }
    },
    [setOpenImgPopup]
  );

  useEffect(() => {
    if (openImgPopup) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
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

  console.log(image);

  return (
    <div
      className={`fixed bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${
        openImgPopup
          ? "inset-0 opacity-100 scale-100 w-full h-full"
          : "opacity-0 scale-0 w-0 h-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenImgPopup(false);
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={() => setOpenImgPopup(false)}
          className="absolute z-50 top-4 right-6 w-10 h-10 flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
        >
          <IoCloseSharp />
        </button>
        <div className="max-w-[38rem] p-4 bg-white h-min w-full mx-auto">
          <h2>{image.alt}</h2>
          {openImgPopup && image && (
            <div className="w-full relative aspect-[4/3] image-container">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                onClick={toggleFullscreen}
              />
            </div>
          )}
          <Link
            href={`/product-category${url}`}
            className="w-fit rounded-md font-semibold text-quaternary uppercase"
          >
            {url.replace("/", "")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullscreenImagePopup;
