"use client";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const RoomPopup = ({ viewAmenities, setViewAmenities, cardDetails }) => {
  useEffect(() => {
    if (viewAmenities) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [viewAmenities]);

  return (
    <div
      className={`fixed bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${viewAmenities ? "inset-0 opacity-100 scale-100 w-full h-full" : "opacity-0 scale-0 w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-origin-center"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setViewAmenities(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setViewAmenities(false);
      }}
    >
      <div className="relative w-full  flex flex-col gap-4 max-sm:mx-4 max-w-lg bg-bgclr p-8 rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={() => setViewAmenities(false)}
          className="absolute z-50 top-4 right-4 w-8 h-8 lg:w-10 lg:h-10 lg:text-2xl flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
        >
          <IoCloseSharp />
        </button>
        <h2 className="heading2 text-clr2 font-medium">Amenities</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between w-full list-disc list-inside">
          {cardDetails.map((amenity,i) => (
            <li key={i} className="capitalize heading4 text-clr2">{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomPopup;
