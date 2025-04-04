"use client";
import { FullscreenImagePopup, SectionWithContainer } from "@/components";
import NavbarBtn from "./NavbarBtn";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface dataProps {
  images: {
    src: string;
    alt: string;
  }[];
  title: string;
  slug: string;
}

const Products: React.FC<dataProps> = ({ images, title }) => {
  const pathName = usePathname();
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const handleOpen = (image: { src: string; alt: string }, pathName: string) => {
    setOpenImgPopup(true);
    setCurrentImage(image);
    setUrl(pathName);
  };

  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6 max-w-7xl">
        <div className="w-full md:col-span-1 col-span-3 flex flex-col gap-4">
          <h2 className="text-2xl font-bold uppercase text-secondary">
            products
          </h2>
          <NavbarBtn />
        </div>
        <div className="col-span-3 grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
          {images.map((item, index) => (
            <div className="w-full flex flex-col gap-2" key={index}>
              <h3 className="uppercase text-primary">{item.alt}</h3>
              <div className="w-full relative aspect-[4/2.5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority
                  className="cursor-pointer"
                  onClick={() => handleOpen(item,pathName)} // Pass only selected image
                />
              </div>
              <p className="uppercase tracking-widest">{title}</p>
            </div>
          ))}
        </div>
      </div>
      {currentImage && (
        <FullscreenImagePopup
          openImgPopup={openImgPopup}
          setOpenImgPopup={setOpenImgPopup}
          image={currentImage} // Pass only one image
          url={url}
        />
      )}
    </SectionWithContainer>
  );
};

export default Products;
