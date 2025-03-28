import { SectionWithContainer } from "@/components";
import Form from "@/components/Form";
import Link from "next/link";
import { JSX } from "react";

interface contactDetailsProps {
  title: string;
  details: {
    title: string;
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
}

const ContactUs: React.FC<contactDetailsProps> = ({ title, details }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:bg-[url('/bg3.png')] after:w-[34.7rem] after:bg-no-repeat after:right-0 after:h-[90%] after:bottom-0 after:opacity-30 after:z-[-1]">
      <div className="w-full grid grid-cols-2 gap-16 ">
        <div className="box_shadow flex flex-col gap-4 p-4">
          <h2 className="description2 manrope text-center font-bold text-primary uppercase">
            contact with us
          </h2>
          <p className="text-secondary largeHeading text-center font-semibold manrope">
            Feel free to write our Mouldings experts
          </p>
          <Form />
        </div>
        <div className="">
          <h2 className="mediumHeading text-secondary font-bold">{title}</h2>
          {details.map((detail) => (
            <div
              key={detail.title}
              className="flex flex-col gap-2 box_shadow_1 border-t border-primary px-4 py-12 mb-4"
            >
              <div className="flex items-center justify-center flex-col gap-2">
                <span className="">{detail.icon}</span>
                <Link href={detail.href} className="text-tertiary font-medium manrope description2">{detail.label}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUs;
