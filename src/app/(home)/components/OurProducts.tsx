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
      <section className="max-w-[1550px] mx-auto md:bg-primary bg-secondary text-white">
        <div className="relative md:aspect-[4/1.131] w-full aspect-[4/3.5] lg:h-[26.95rem]">
          <Image
            src={imageUrl + "Background.webp"}
            alt="banner"
            fill
            className="object-cover md:block hidden"
          />
          <Image
            src={imageUrl + "im4.webp"}
            alt="banner"
            fill
            className="object-cover lg:hidden block"
          />
          <div className="absolute inset-0 z-10">
            <div className="flex w-full h-full items-center max-lg:px-4">
              <div className="flex flex-col justify-center gap-4 w-fit md:ml-[17rem]">
                <h2 className="text-xl text-primary uppercase description2">{title[0]}</h2>
                <h3 className="manrope text-white largeHeading lg:max-w-[35rem] max-lg:leading-[3.9rem] font-semibold">{subTitle[0]}</h3>
                <Link
                  href={links[0].href}
                  className="py-5 pe-20 ps-10 bg-primary text-white w-fit uppercase rounded-md font-semibold description2 hover:bg-quaternary transition-colors ease-in-out duration-300"
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
            className="mt-[-1.5rem] ml-[-2rem] relative z-10 -mb-px max-lg:hidden"
          />
          <div className="w-full col-span-2 flex md:flex-row max-lg:px-4 max-xl:py-4 flex-col items-center gap-6 lg:gap-48">
            <div className="flex flex-col justify-center gap-4 md:w-fit w-full">
              <h2 className="text-white uppercase text-sm">{title[1]}</h2>
              <h3 className="manrope mediumHeading text-white font-semibold max-w-[22rem]">{subTitle[1]}</h3>
            </div>
            <Link
              href={links[1].href}
              className="py-5 pe-20 ps-10 bg-secondary text-white md:w-fit w-full uppercase rounded-md font-semibold hover:bg-white hover:text-secondary transition-colors ease-in-out duration-300"
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
