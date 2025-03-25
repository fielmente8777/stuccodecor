
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
      <div className="relative aspect-video md:aspect-[4/1.7]">
        <Image src={src} alt="banner" fill className="object-cover" />
        <div className="absolute inset-0">
          <Container>
            <div className="flex flex-col w-full h-full">
            <h1>{title}</h1>
            <Link href={buttons[0].href}>{buttons[0].label}</Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Banner;
