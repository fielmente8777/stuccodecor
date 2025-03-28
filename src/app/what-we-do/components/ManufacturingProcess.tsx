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
      <div className="w-full rounded-2xl mt-4 p-4 box_shadow">
        <Container>
          <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex flex-col gap-4">
              <MainHeading h2 title={title} className="font-bold text-secondary mediumHeading " />
              {desc.map((item, index) => (
                <p key={index} className="description2 text-tertiary leading-5 mb-4">{item}</p>
              ))}
            </div>
            <div className="relative w-full aspect-[4/1.8]">
              <Image
                src={image}
                alt="history"
                fill
                className=" box_shadow"
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ManufacturingProcess;
