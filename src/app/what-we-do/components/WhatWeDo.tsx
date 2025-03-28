"use client";
import { MainHeading, Section } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

interface whatWedodata {
  title: string;
  subTitle: string;
  desc: string[];
  images: string[];
}
const WhatWeDo: React.FC<whatWedodata> = ({
  title,
  subTitle,
  desc,
  images,
}) => {
  return (
    <Section className="lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-20 w-full relative after:absolute after:-top-2 after:left-2 after:bg-[url('/im7.webp')] after:w-full after:bg-no-repeat after:h-full after:z-[-1]">
            {images.map((imag, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative w-full aspect-[4/2.8] max-w-[26rem] rounded-2xl overflow-hidden flex ${index % 2 !== 0 ? "md:ml-auto" : "md:mr-auto"}`}
                key={index}
              >
                <Image src={imag} alt={title} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <MainHeading
              h2
              title={title}
              className="!text-primary uppercase tracking-widest font-bold manrope description2 manrope"
            />
            <MainHeading
              h3
              title={subTitle}
              className="font-bold mediumHeading text-secondary capitalize"
            />
            <div className="flex flex-col lg:gap-6 gap-4">
              {desc.map((item, index) => (
                <p key={index} className="description2 text-tertiary leading-5">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDo;
