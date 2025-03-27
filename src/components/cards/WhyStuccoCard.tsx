import { whyStucco } from "@/@types/types";
import Image from "next/image";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";

const WhyStuccoCard: React.FC<whyStucco['images'][0]> = ({ src, title, desc}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 shadow-2xl px-9 py-7 rounded-lg">
            <div className="relative w-full aspect-[4/.7] rounded-lg overflow-hidden">
                <Image src={src} alt={title} fill className="object-contain" />
            </div>
            <MainHeading h3 title={title} className="text-center uppercase font-bold manrope" />
            <Paragraph text={desc} className="text-tertiary text-center" />
        </div>
    );
}

export default WhyStuccoCard;