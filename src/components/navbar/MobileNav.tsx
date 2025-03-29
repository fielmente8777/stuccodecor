"use client";
import { NavLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathName = usePathname();
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
    <header
      className={`fixed top-0 left-0 w-full  h-full z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="bg-secondary/80 w-full h-full relative">
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-white absolute top-10 right-10 border-2 border-white"
        >
          <IoMdClose />
        </button>
        <nav className="h-full bg-black max-w-[260px] w-full">
          <ul className="flex flex-col">
            <li className="mb-8 px-8 pt-8">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="w-full block text-white hover:text-tertiary capitalize text-lg transition-all duration-300 ease-in-out"
              >
                <Image
                  src="/logo2.png"
                  alt="logo"
                  width={200}
                  height={100}
                  className="rounded-sm"
                />
              </Link>
            </li>
            {NavLink.map((link) => (
              <li
                key={link.id}
                className="w-full flex items-center justify-center border-tertiary border-t p-5 last:border-b"
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`w-full block  hover:text-tertiary capitalize text-lg transition-all duration-300 ease-in-out ${link.href.toLowerCase() === pathName.toLowerCase() ? "text-primary" : "text-white"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
