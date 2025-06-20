"use client";
import { SectionWithContainer } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

interface reviewProps {
  name: string;
  review: string;
  date: string;
  src: string;
  gicon: string;
  rating: string;
  verify: string;
}
const Reviews = () => {
  const data = [
    {
      name: "Saif Bahish",
      review:
        "This place was a rare find for me. They manufacture their own moldings and have decent prices. Their staff are extremely friendly and helpful.",
      date: "2024-05-19",
      src: "/saif.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "G",
      review:
        "Great product, good prices and the staff were easy to deal with. Definitely recommending them to my friends.",
      date: "2023-09-18",
      src: "/g.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Kevin O'Rourke",
      review: "It was a great and quick service! Thanks",
      date: "2023-04-27",
      src: "/kevin.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Shernell Holder",
      review:
        "best product ever in the world, great service from staff and management. High recommended.",
      date: "2022-05-26",
      src: "/shern.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Murtuza Akhtar",
      review:
        "Skilled people, with good knowledge of the products. A complete package for housing is easily available in here. Highly recommended.",
      date: "2022-05-14",
      src: "/murt.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Syed Hamza",
      review:
        "A highly professional environment with an admirable experienced staff! range of products maintaining the aura of modern and classical architecture are available to build your dream house. My personal recommendation is to pay a visit; you'll never regret it.",
      date: "2022-05-14",
      src: "/syd.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Seraj Haqique",
      review:
        "Manufacturer of world-class architectural mouldings at a very affordable price. I got custom made mouldings for my dream house. The owner of the business personally helped me with very innovative and latest designs as per my requirements. Thanks",
      date: "2022-05-13",
      src: "/seraj.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Naushad Akhtar",
      review:
        "Wide range and very durable products. Friendly staff and very good customer service",
      date: "2021-12-03",
      src: "/nau.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Syed Jafri",
      review:
        "Friendly, professional, highly knowledgeable and eager to assist you beyond your expectation. I was astonished upon their product knowledge when I had some difficult design questions for my highly customizable product. They delivered it on time, with great precisions. I would highly recommend to visit their store for all your future stucco purchases.",
      date: "2021-12-01",
      src: "/sydaf.png",
      gicon: "",
      rating: "",
      verify: "",
    },
  ];
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-4 lg:max-w-7xl w-full mx-auto">
        <h2 className="text-secondary text-center font-bold mediumHeading">
          Our Reviews
        </h2>
        <div className="flex max-lg:flex-col items-center justify-center gap-4">
          <div className="md:w-[15%] flex flex-col gap-2 items-center">
            <h3 className="text-secondary text-center uppercase font-bold">
              excellent
            </h3>
            <div className="flex gap-1 items-center justify-center">
              {[1, 2, 3, 4, 5].map((item) => (
                <Image
                  key={item}
                  src={"/star.svg"}
                  alt="alt"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="text-center description2">
              Based on <b>18 reviews</b>
            </p>
            <Image src="/google.svg" alt="alt" width={100} height={50} />
          </div>
          <div className="md:w-[70%] w-full">
            <SliderSwip
              data={data}
              modules={[Navigation,Autoplay]}
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".location_next",
                prevEl: ".location_prev",
              }}
              slidesPerView={1}
              spaceBetween={8}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {(item) => <Card {...item} />}
            </SliderSwip>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Reviews;

export const Card: React.FC<reviewProps> = ({
  name,
  review,
  date,
  src,
  //   gicon,
  //   rating,
  //   verify,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex-col h-full min-h-[220px] gap-3 bg-[#333333] p-4 rounded-sm text-white">
      <div className="flex gap-8 mb-3 items-center">
        <Image src={src} alt="alt" width={50} height={50} />
        <div className="flex flex-col ">
          <h3 className="description3 font-bold">{name}</h3>
          <p className="">{date}</p>
        </div>
        <Image src={"/gico.svg"} alt="alt" width={20} height={20} className="ml-auto" />
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={"/star.svg"}
            alt="alt"
            width={20}
            height={20}
          />
        ))}
        <Image src={"/ver.svg"} alt="alt" width={20} height={20} />
      </div>
      <p className="description3 !leading-5 mt-4">
        {review.slice(0, readMore ? review.length : 100)} 
        {review.length > 120 && !readMore && " ..."}
        {review.length > 120 && (
          <b onClick={() => setReadMore(!readMore)}>
            {readMore ? " Read Less" : " Read More"}
          </b>
        )}
      </p>
    </div>
  );
};
