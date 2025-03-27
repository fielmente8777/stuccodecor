"use client";
import { Container, MainHeading, Section } from "@/components";
import Image from "next/image";
import { useState } from "react";

interface introductionToMaterialProps {
  title: string;
  desc: string[];
  cards: {
    id: number;
    src: string;
    title: string;
    desc: string;
  }[];
}
const IntroToMaterial: React.FC<introductionToMaterialProps> = ({
  title,
  desc,
  cards,
}) => {
  const category = [...new Set(cards.map((item) => item.title))];

  const filterCards = (category: string) => {
    return cards.filter((card) => card.title === category);
  };

  const filteredCards = filterCards(category[0]);

  const [selectCategory, setSelectCategory] = useState(filteredCards);

  return (
    <Section>
      <Container>
        <MainHeading h2 title={title} className="font-bold manrope" />
      </Container>
      <div className="w-full bg-secondary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 w-full">
            <div className="col-span-1">
              <div className="flex flex-col gap-4 w-full">
                {category.map((item, index) => (
                  <button
                    key={index}
                    className={`bg-white py-3 px-8 text-start font-semibold ${item === selectCategory[0].title ? " text-secondary" : "text-primary"}`}
                    onClick={() => setSelectCategory(filterCards(item))}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col gap-4 w-full">
                {selectCategory.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <p className="text-white">{item.desc}</p>
                    <div className="relative w-full aspect-[4/4.5] max-w-sm">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col gap-4 py-4">
          {desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default IntroToMaterial;
