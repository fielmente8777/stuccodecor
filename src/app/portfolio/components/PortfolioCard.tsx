"use client";
import { Section, FullscreenImagePopup1 } from "@/components";
import Image from "next/image";
import { useState } from "react";

interface portfolioCardProps {
  cards: {
    src: string;
  }[];
}
const PortfolioCard: React.FC<portfolioCardProps> = ({ cards }) => {
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState<string[]>([]); // array of image
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = ({
    images,
    index,
  }: {
    images: string[];
    index: number;
  }) => {
    setOpenImgPopup(true);
    setCurrentImage(images);
    setCurrentIndex(index);
  };
  return (
    <Section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 px-4">
        {cards.map((card, index) => (
          <div className="w-full relative aspect-[4/3]" key={index}>
            <Image
              src={card.src}
              alt="portfolio"
              fill
              onClick={() =>
                handleOpen({
                  images: [...new Set(cards?.map((card) => card.src))],
                  index,
                })
              }
              className="object-cover cursor-pointer"
            />
            {/* <div className="absolute inset-0">{index}</div> */}
          </div>
        ))}
      </div>
      <FullscreenImagePopup1
        openImgPopup={openImgPopup}
        setOpenImgPopup={setOpenImgPopup}
        image={currentImage}
        currentIndex={currentIndex}
      />
    </Section>
  );
};

export default PortfolioCard;
