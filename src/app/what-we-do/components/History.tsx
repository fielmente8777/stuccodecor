import { commonProps } from "@/@types/types";
import { Container, MainHeading, Section } from "@/components";
import Image from "next/image";


const History: React.FC<commonProps> = ({ title, desc, image }) => {
  return (
    <Section>
      <Container>
        <MainHeading h2 title={title} className="font-bold text-secondary largeHeading text-center capitalize" />
      </Container>
      <div className="w-full rounded-2xl mt-8 p-4 grid md:grid-cols-2 grid-cols-1 box_shadow gap-4">
        <div className="relative w-full aspect-[4/2]">
          <Image src={image} alt="history" fill className="object-cover box_shadow" />
        </div>
        <div className="flex flex-col gap-4">
          {desc.map((item, index) => (
            <p key={index} className="description2 text-tertiary leading-5">{item}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default History;
