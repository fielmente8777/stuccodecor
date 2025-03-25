import { JSX } from "react";

export interface navLinkProps {
  id: number;
  label: string;
  href: string;
}

export interface socialLinkProps {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface footerLinkProps {
  id: number;
  title: string;

  links: {
    id: number;
    icon?: JSX.Element;
    title?: string;
    label: string;
    href?: string;
  }[];
}

export interface whyStucco {
  title: string;
  desc: string;
  images: {
      id: number;
      src: string;
      title: string;
      desc: string;
  }[];
}