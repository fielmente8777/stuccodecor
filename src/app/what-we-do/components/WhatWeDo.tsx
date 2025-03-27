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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col gap-4 w-full">
            {images.map((imag, index) => (
              <motion.div 
              initial={{ opacity: 0 , scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}

              className="" key={index}>
                <Image src={imag} alt={title} width={200} height={200} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <MainHeading
              h2
              title={title}
              className="!text-primary uppercase font-bold manrope"
            />
            <MainHeading
              h3
              title={subTitle}
              className="manrope font-extrabold "
            />
            {desc.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDo;
