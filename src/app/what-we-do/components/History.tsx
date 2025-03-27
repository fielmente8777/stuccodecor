import { commonProps } from "@/@types/types";
import { Container, MainHeading, Section } from "@/components";
import Image from "next/image";


const History: React.FC<commonProps> = ({ title, desc, image }) => {
  return (
    <Section>
      <Container>
        <MainHeading h2 title={title} className="font-bold manrope" />
      </Container>
      <div className="w-full rounded-2xl mt-4 p-4 grid grid-cols-2 shadow-2xl">
        <div className="relative w-full aspect-[4/2.7]">
          <Image src={image} alt="history" fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-4">
          {desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default History;
