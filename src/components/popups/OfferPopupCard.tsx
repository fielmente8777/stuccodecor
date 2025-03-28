import { CardProps } from "@/@types/type";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

interface OfferPopupCardProps {
  openOfferCard: boolean;
  setOpenOfferCard: React.Dispatch<React.SetStateAction<boolean>>;
  items?: CardProps["items"][number] | null;
}
const OfferPopupCard: React.FC<OfferPopupCardProps> = ({
  openOfferCard,
  setOpenOfferCard,
  items,
}) => {
  return (
    <div
      className={`fixed bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ${openOfferCard ? "inset-0 opacity-100 scale-100 w-full h-full" : "opacity-0 scale-0 w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-origin-center"}`}
    >
      <div className="max-w-5xl w-full mx-auto max-sm:px-4">
        <div className="relative w-full bg-bgclr lg:p-6 p-4 rounded-sm shadow-xl">
          <button
            onClick={() => setOpenOfferCard(false)}
            className="absolute z-50 md:top-[0.6rem] md:right-2 -top-10 right-0 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-600 hover:bg-primary/90 font-bold text-white"
          >
            <IoCloseSharp />
          </button>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={items?.image ?? "/event.png"}
                alt={items?.title ?? "minimalist hotel"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="heading1 cormo text-clr2 font-bold">
                {items?.title}
              </h3>
              <p className="text-clr7 description1">{items?.desc} </p>
              <p className="text-clr7 description1 uppercase font-semibold">
                Valid for: {items?.validFor}
              </p>
              {/* <p className="text-clr7 description1 uppercase font-semibold">
                Book by: {items?.bookBy}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopupCard;
