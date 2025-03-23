import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";
import { AboutUsDataProps } from "@/@types/types";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  src,
  label,
  href,
  index = 0,
}) => {
  return (
    <>
      <div
        className={`lg:grid grid-cols-2 lg:items-center gap-6 ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-1 mb-5 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
        >
          {src && (
            <div
              className={` relative w-full aspect-[4/2.88] rounded-lg overflow-hidden `}
            >
              <Image
                src={src}
                alt="Image 1"
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          )}
        </div>
        <div
          className={` flex flex-col gap-4 col-span-1  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && (
            <div className="flex flex-col gap-2">
              <h2 className="capitalize font_go text-primary mediumHeading ">
                  {title}
              </h2>
              <h3 className="capitalize text-secondary heading1 font-semibold">
                {subtitle}
              </h3>
            </div>
          )}
          {desc && <Paragraph text={desc} />}
          {label && href && (
            <Button
              label={label}
              href={href}
              className="bg-secondary !rounded-full w-fit px-6"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;
