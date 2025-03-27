import { commonProps } from "@/@types/types";

import Image from "next/image";
import { Container, MainHeading, Section } from "@/components";

const ManufacturingProcess: React.FC<commonProps> = ({
  title,
  desc,
  image,
}) => {
  return (
    <Section className="!pb-1">
      <div className="w-full rounded-2xl mt-4 p-4  shadow-2xl">
        <Container>
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-4">
              <MainHeading h2 title={title} className="font-bold manrope" />
              {desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="relative w-full aspect-[4/2.7]">
              <Image
                src={image}
                alt="history"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ManufacturingProcess;
