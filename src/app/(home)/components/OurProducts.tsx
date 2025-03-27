import { imageUrl } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

interface ourProducts {
  title: string[];
  subTitle: string[];
  links: {
    label: string;
    href: string;
  }[];
}
const OurProducts: React.FC<ourProducts> = ({ title, subTitle, links }) => {
  return (
    <>
      <section className="max-w-[1550px] mx-auto bg-primary text-white">
        <div className="relative aspect-video md:aspect-[4/1.131] h-[26.95rem]">
          <Image
            src={imageUrl + "Background.webp"}
            alt="banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-10">
            <div className="flex w-full h-full items-center ">
              <div className="flex flex-col justify-center gap-4 w-fit ml-[16rem]">
                <h2 className="text-xl text-primary uppercase">{title[0]}</h2>
                <h3 className="text-3xl text-white">{subTitle[0]}</h3>
                <Link
                  href={links[0].href}
                  className="py-3 pe-16 ps-4 bg-primary text-white w-fit uppercase rounded-md font-semibold"
                >
                  {links[0].label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1600px] mx-auto bg-primary text-white">
        <div className="w-full lg:grid grid-cols-3">
          <Image
            src="/im8.webp"
            alt="alt"
            width={518}
            height={200}
            className="mt-[-1.5rem] ml-[-2rem] relative z-10 -mb-px"
          />
          <div className="w-full col-span-2 flex items-center gap-10">
            <div className="flex flex-col justify-center gap-4 w-fit">
              <h2 className="text-xl text-white uppercase">{title[1]}</h2>
              <h3 className="text-3xl text-white">{subTitle[1]}</h3>
            </div>
            <Link
              href={links[1].href}
              className="py-3 pe-16 ps-4 bg-secondary text-white w-fit uppercase rounded-md font-semibold"
            >
              {links[1].label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
