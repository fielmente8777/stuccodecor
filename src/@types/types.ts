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

export interface AboutUsDataProps {
  title: string;
  subtitle: string;
  desc: string;
  src: string;
  label: string;
  href: string;
  index?: number;
}

export interface FeaturesDataProps {
  title: string;
  desc: string;
  
}

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

export interface OurFeaturesDataProps {
  title: string;
  desc: string;
  images: {
    id: number;
    src: string;
    title: string;
  }[];
}

export interface GalleryDataProps {
  title: string;
  images: string[];
}
