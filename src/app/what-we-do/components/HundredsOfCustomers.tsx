"use client";
import { LazyLoadedVideo, MainHeading } from "@/components";
import Image from "next/image";
import { Container } from "@/components";
import { useState } from "react";
import { FillPlayButton, Tick } from "@/icons/icons";
import { IoClose } from "react-icons/io5";
interface hundredsOfCustomersProps {
  title: string;
  src: string;
  image: string;
  desc: string[];
}
const HundredsOfCustomers: React.FC<hundredsOfCustomersProps> = ({
  title,
  src,
  image,
  desc,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="max-screen">
      <div className="relative w-full aspect-[16/5.5] -mb-4">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Container>
            <div className="w-full grid grid-cols-2 text-white mt-16">
              <div className="">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-14 h-14 aspect-square bg-primary rounded-full flex items-center justify-center hover:bg-quaternary transition-all duration-300 ease-in-out"
                >
                  <span className="">
                    <FillPlayButton />
                  </span>
                </button>
                <MainHeading
                  h2
                  title={title}
                  className="font-bold manrope text-white"
                />
              </div>
              <div className="flex flex-col gap-4">
                {desc.map((item, index) => (
                  <p
                    key={index}
                    className="px-8 py-3 bg-black/60  font-semibold flex items-center gap-3 w-[25rem] hover:bg-white/30 transition-all duration-300 ease-in-out"
                  >
                    <Tick /> {item}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={`fixed z-50 bg-black/30 flex items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen
            ? "inset-0 w-full h-screen opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <div className="max-w-sm w-full">
          <div className="relative w-full aspect-[4/7] bg-gray-700 p-2">
            <button
              className="absolute top-4 z-10 border border-gray-700 w-5 h-5 flex items-center justify-center right-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <IoClose />
            </button>
            <LazyLoadedVideo
              src={src}
              controls
              muted={isOpen && false}
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HundredsOfCustomers;
