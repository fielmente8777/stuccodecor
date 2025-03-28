"use client";
import { FooterLink, SocialLink } from "@/data/links";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-screen bg-secondary text-white">
      <SectionWithContainer sectionClassName="!pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Image
                src={"/logo2.png"}
                alt="logo"
                width={300}
                height={100}
                className="object-contain"
              />

              <div className="flex gap-4">
                {SocialLink.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-white bg-primary w-7 h-7  aspect-square rounded-lg border border-primary flex items-center justify-center"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            {FooterLink.map((link, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h2
                  className={`text-lg font-bold capitalize ${i === 0 ? "text-white" : "text-primary"} `}
                >
                  {link.title}
                </h2>
                {link.links.map((item) => (
                  <>
                    {!item.href ? (
                      <p
                        key={item.title}
                        className="text-sm font-semibold capitalize"
                      >
                        {item.title} {item.label}
                      </p>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={`text-sm font-semibold flex items-center gap-2 ${i === 0 ? "text-primary" : "text-white"} `}
                      >
                        {item.icon && (
                          <span className="text-primary">{item.icon}</span>
                        )}{" "}
                        {item.label}
                      </Link>
                    )}
                  </>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-white my-8"></div>
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-secondary !pb-6 !pt-0 text-white ">
        <div className="max-w-6xl mx-auto">
          <div className="flex max-md:flex-col items-center lg:justify-between gap-4">
            <p className="text-center">
              © All copyright {currentYear}{" "}
              <Link href="/" className="me-2 text-primary">
                Stucco Decor.
              </Link>
              {"  "}
              <br className="lg:hidden" />
              Designed & Developed by{" "}
              <Link href="https://eazotel.com" className="font-bold">
                Eazotel
              </Link>
            </p>
            <p className="">
              Marketing Partner:{" "}
              <Link href="/" className=" text-primary">
                One-shot Marketing
              </Link>
            </p>
          </div>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
