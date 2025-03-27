import { Section } from "@/components";
import MainHeading from "../../../components/Heading/MainHeading";
import { whyStucco } from "@/@types/types";
import { WhyStuccoCard } from "@/components/cards";

const WhyStucco: React.FC<whyStucco> = ({ title, images }) => {
  return (
    <Section>
      <div className="max-w-[1342px] mx-auto max-lg:px-4">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <MainHeading h2 title={title} className="" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <WhyStuccoCard key={image.id} {...image} />
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
};

export default WhyStucco;
