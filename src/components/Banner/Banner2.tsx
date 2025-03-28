import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components";

interface BannerProps {
  title?: string;
  src?: string;
  links: {
    label: string;
    href: string;
  }[];
}
const Banner2: React.FC<BannerProps> = ({ title, src, links }) => {
  return (
    <section className="max-screen">
      <div className="relative aspect-video md:aspect-[4/1] w-full">
        {src && <Image src={src} alt="banner" fill className="object-cover" />}
        <div className="absolute inset-0  bg_gradient" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Container>
            <div className="flex flex-col w-full h-full text-white">
              <div className="flex items-center gap-2 text-primary">
                <Link
                  href={links[0].href}
                  className="text-primary w-fit font-semibold capitalize"
                >
                  {links[0].label}
                </Link>
                |
                <Link
                  href={links[1].href}
                  className="text-primary w-fit font-semibold capitalize"
                >
                    {links[1].label.replace(/-+/g, " ")}
                </Link>
              </div>
              <h1>{title}</h1>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
