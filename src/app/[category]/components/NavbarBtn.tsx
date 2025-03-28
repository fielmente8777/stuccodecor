"use client";
import { exteriorProductspageData } from "@/data/pageData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarBtn = () => {
  const pathName = usePathname();
  const links = exteriorProductspageData.productsCategory.products;

  return (
    <>
      <div className="w-full bg-secondary flex flex-col">
        {links.map((card) => {
          const link = card.toLowerCase();
          return (
            <Link
              href={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
              key={link}
              className={`w-full p-4 uppercase hover:bg-primary text-white hover:text-white ${pathName?.toLowerCase() === `/${link}/` ? "bg-primary text-white" : ""}`}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavbarBtn;
