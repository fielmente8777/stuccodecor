"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

interface PopupNewsLetterProps {
  openNewsLetter: boolean;
  setOpenNewsLetter: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopupNewsLetter: React.FC<PopupNewsLetterProps> = ({
  openNewsLetter,
  setOpenNewsLetter,
}) => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const intervalTime = 5 * 60000;
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setOpenNewsLetter(true);
      document.body.style.overflow = "hidden";
    }, intervalTime); // 5 minutes

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setOpenNewsLetter, intervalTime]);

  const closeModal = useCallback(() => {
    console.log("closeModal");
    setOpenNewsLetter(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setOpenNewsLetter]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const handleNewsletter = async () => {
    const data = {
      Domain: "minimalist",
      email: `name: ${userName}, email: ${userEmail}`,
    };
    try {
      await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    setUserName("");
    setUserEmail("");
  };

  return (
    <div
      className={`fixed w-full h-full bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${openNewsLetter ? "inset-0 opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
    >
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute z-50 top-[0.6rem] right-[1.5rem] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
        >
          <IoCloseSharp />
        </button>
        <div className="max-w-5xl px-4 mx-auto w-full  h-full">
          <div className="w-full flex flex-col items-center justify-center gap-8 bg-white py-12">
            <h2 className="flex flex-col">
              <span className="text-[#8b7355] largeHeading font-medium -ms-11 cormo">
                exclusive
              </span>
              <span className="xLargeHeading cormo font-medium text-gray-600 lg:-mt-6 -mt-3 uppercase">
                access
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:gap-12 gap-4 items-center w-full px-4">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image
                  src="/icons/GIF1.gif"
                  alt="Concierge Illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full">
                <div className=" md:text-left">
                  <p className="text-clr3 heading4 montserrat font-semibold">
                    Be the first to know! Subscribe and get first dibs on
                    exclusive offers, secret deals, and discounts on your next
                    stay.
                    <br className="hidden lg:block" />
                  </p>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary"
                  />
                  <button
                    onClick={handleNewsletter}
                    className="w-full bg-primary text-white py-3 uppercase hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupNewsLetter;
