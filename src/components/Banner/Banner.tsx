// import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button";
import LazyLoadedVideo from "../LazyLoadedVideo";

interface BannerProps {
  title: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({ title, desc, src, buttons }) => {
  return (
    <section className="max-w-[1600px] mx-auto bg-primary text-white lg:mb-10">
      <div className="grid lg:grid-cols-9 items-center gap-3 justify-center grid-cols-1">
        <div className="lg:col-span-4 w-full max-md:px-5 max-md:pt-4">
          <div className="flex flex-col gap-4 ml-auto max-w-lg w-full">
            <h1 className="largeHeading font_go uppercase letter_spacing font-semibold max-sm:text-center">
              {title}
            </h1>
            <Paragraph className={"mt-4 description1 text-white max-sm:text-center"} text={desc} />
            <div className="flex items-center gap-5 mt-4">
              {buttons.map((button, i) => (
                <Button
                  key={i}
                  label={button.label}
                  href={button.href}
                  className={`${i === 0 ? "bg-secondary" : "bg-white !text-secondary"} `}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative w-full lg:aspect-video aspect-[4/3]">
            <LazyLoadedVideo src={src} poster={src} controls={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
