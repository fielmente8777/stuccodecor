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
      <SectionWithContainer sectionClassName="">
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
              {SocialLink.map((link,i) => (
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
              <h4 className="text-lg font-bold capitalize">{link.title}</h4>
              {link.links.map((item, i) => (
                <>
                  {!item.href ? (
                    <p key={i} className="text-sm font-semibold capitalize">
                      {item.title}  {item.label}
                    </p>
                  ) : (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-sm font-semibold flex items-center gap-2"
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
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-secondary !py-4 text-white">
        <div className="flex max-md:flex-col items-center lg:justify-between gap-4">
          <p className="text-center">
            © {currentYear} Yakumi. <br className="lg:hidden" />
            All Rights Reserved. <br className="lg:hidden" />
            Designed & Developed by{" "}
            <Link href="https://eazotel.com" className="font-bold">
              Eazotel
            </Link>
          </p>
          <p className="">Terms of Service Privacy Policy</p>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
