import { SectionWithContainer } from "@/components";
import StuccoContactForm from "@/components/StuccoContactForm";
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
    <SectionWithContainer sectionClassName="relative max-md:py-10 after:absolute after:bg-[url('/bg3.png')] after:w-[34.7rem] after:bg-no-repeat after:right-0 after:h-[90%] after:bottom-0 after:opacity-30 after:z-[-1]">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
        <div className="box_shadow flex flex-col gap-4 overflow-hidden">
          {/* <h2 className="description2 manrope text-center font-bold text-primary uppercase">
            contact with us
          </h2>
          <p className="text-secondary largeHeading text-center font-semibold manrope">
            Feel free to write our Mouldings experts
          </p> */}
          {/* <Form /> */}
          <StuccoContactForm />
        </div>
        <div className="space-y-4">
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
