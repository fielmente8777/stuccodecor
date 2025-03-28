"use client";
import Link from "next/link";
import { NavLink, NavLinksUpper, SocialLink } from "@/data/links";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { MenuBurger } from "@/icons/icons";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header>
      {/* nav upper */}
      <div className="bg-secondary">
        <div className="max-w-[1500px] mx-auto py-2">
          <nav className="flex items-center max-lg:flex-col justify-between">
            <ul className="flex items-center gap-4 max-w-xl lg:ms-32 w-full max-lg:px-4">
              {NavLinksUpper[0].links.map((link) => (
                <li key={link.id} className="">
                  <Link
                    href={link.href ? link.href : "#"}
                    className="flex items-center gap-2 text-white"
                  >
                    {link.icon && (
                      <span className="text-primary">{link.icon}</span>
                    )}{" "}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="lg:flex hidden items-center gap-4 max-w-xl ms-48">
              {SocialLink.map((link) => (
                <li key={link.id} className="">
                  <Link
                    href={link.href ? link.href : "#"}
                    className="text-white bg-primary w-5  aspect-square rounded-sm flex items-center justify-center hover:bg-quaternary transition-colors duration-300 ease-in-out"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center">
              {NavLinksUpper[1].links.map((link, i) => (
                <li key={i} className="p-3">
                  <Link
                    href={link.href ? link.href : "#"}
                    className="flex items-center gap-2 text-white uppercase bg-primary px-[1.88rem] py-[0.81rem] rounded-full font-bold hover:bg-quaternary  transition-colors duration-300 ease-in-out text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto">
        <nav className="flex items-center lg:justify-between gap-36">
          <div className="ms-9">
            <Link
              href="/"
              className="relative h-[6rem] w-[8rem] aspect-auto block"
            >
              <Image
                src={"/logo.png"}
                alt="yakumi"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
          <ul className="lg:flex hidden items-center justify-center">
            {NavLink.map((link) => (
              <li key={link.id} className="">
                <Link
                  href={link.href}
                  className={`${pathname === link.href ? "text-secondary" : ""} px-[0.63rem] py-[0.81rem] hover:border-primary hover:text-primary border-b-2 border-transparent transition-colors duration-300 ease-in-out font-medium`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:flex hidden items-center max-w-[15rem] w-full">
            <Link
              href="https://maps.app.goo.gl/zavBmjps9Wy2H2p66"
              className="flex items-center gap-2 text-white uppercase bg-primary px-[1.88rem] py-[0.81rem] rounded-full font-bold hover:bg-quaternary transition-colors duration-300 ease-in-out text-xs"
            >
              <span className="sr-only">location</span>
              get direction
            </Link>
          </div>
          <button
            className={`text-4xl lg:hidden text-primary font-bold  transition-all duration-300 ease-in-out`}
            onClick={() => setIsOpen(!isOpen)}
          >
             <MenuBurger />
          </button>
        </nav>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
