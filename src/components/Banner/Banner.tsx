
import Image from "next/image";
import Container from "../SectionComponents/Container";
import Link from "next/link";

interface BannerProps {
  title: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({ title, src, buttons }) => {
  return (
    <section className="max-w-[1600px] mx-auto bg-primary text-white">
      <div className="relative md:aspect-[4/1.7] aspect-[4/3.5]">
        <Image src={src} alt="banner" fill className="object-cover object-left" priority />
        <div className="absolute top-[40%] left-8 -translate-y-1/2">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-11 w-full h-full max-w-3xl">
            <h1 className="largeHeading">{title}</h1>
            <Link href={buttons[0].href} className="w-fit bg-primary px-7 py-3 rounded-md font-semibold text-white uppercase lg:text-base text-sm tracking-widest hover:bg-quaternary transition-colors ease-in-out duration-300">{buttons[0].label}</Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Banner;
