import { SectionWithContainer } from "@/components";
import Image from "next/image";
import MainHeading from "../../../components/Heading/MainHeading";
import Paragraph from "../../../components/Paragraph/Paragraph";

interface aboutProps {
  title: string;
  subtitle: string;
  desc: string;
  src: string;
}
const About: React.FC<aboutProps> = ({ title, src, subtitle, desc }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:bg-[url('/bg3.png')] after:w-[34.7rem] after:bg-no-repeat after:right-0 after:h-[80%] after:bottom-0 after:opacity-30 after:z-[-1] before:absolute before:bg-[url('/bg1.png')] before:w-[12rem] before:right-12 before:h-[10rem] before:bg-no-repeat before:top-[-2rem] before:opacity-30 before:z-[-1]">
      <div className="lg:grid grid-cols-2 gap-28 lg:py-20 max-w-[73.5rem] mx-auto w-full">
        <div className="w-full relative aspect-[4/4.2] after:absolute after:bg-[url('/bg2.png')] after:w-full after:bg-no-repeat after:h-[95%] after:right-[-13rem] after:top-1/2 after:-translate-y-1/2 after:z-[-1]">
          <Image src={src} alt={title} fill className="object-cover rounded-sm" />
        </div>
        <div className="flex flex-col gap-4">
          <MainHeading h2 title={title} className="!text-primary uppercase font-bold manrope" />
          <MainHeading h3 title={subtitle} className="manrope font-extrabold " />
          <Paragraph text={desc} className="text-tertiary" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;
