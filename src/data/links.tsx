import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import {
  FillCallIcon,
  FillFacebook,
  FillFacebookIcon,
  FillInstagram,
  FillInstagramIcon,
  FillLinkedin,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
  FillTwitter,
  FillTwitterIcon,
} from "@/icons/icons";

export const imageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/";

export const trimImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/TRIM/";
export const sillImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/SILL/";
export const bandImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/BAND/";
export const corniceImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/CORNICE/";
export const pilasterImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/PILASTER/";
export const keystoneImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/KEYSTONE/";
export const quoinImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/QUOIN/";
export const baseAndCapImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/BASEandCAP/";

export const columnImageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/stuccoDecor/products/COLUMN/";

export const NavLinksUpper: footerLinkProps[] = [
  {
    id: 1,
    title: "contact details",
    links: [
      {
        id: 1,
        title: "call",
        label: "+1 647-477-6066",
        href: "tel:+1 647-477-6066",
        icon: <FillCallIcon />,
      },
      {
        id: 2,
        title: "mail :",
        label: "info@stuccodecor.com",
        href: "mailto:info@stuccodecor.com",
        icon: <FillMailIcon />,
      },
    ],
  },

  {
    id: 2,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "create own design",
        href: "/own-design",
      },
      {
        id: 2,
        label: "get custom quotation",
        href: "/quote-form",
      },
    ],
  },
];

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "What We Do",
    href: "/what-we-do/",
  },
  {
    id: 3,
    label: "Exterior Products",
    href: "/exterior-products/",
  },
  {
    id: 4,
    label: "Portfolio",
    href: "/portfolio/",
  },
  {
    id: 5,
    label: "Download our Catalogue",
    href: "https://stuccodecor.com/wp-content/uploads/2024/06/21263-Stucco-Decor-2024-Catalogue_DIGITAL-3.pdf",
  },
  {
    id: 6,
    label: "Contact Us",
    href: "/contact-us/",
  },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/people/Stuccodecorcom/100068907789285/?ref=pages_you_manage#",
  },
  {
    id: 2,
    label: "twitter",
    icon: <FillTwitter />,
    href: "https://x.com/Stuccodecor1",
  },
  {
    id: 3,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/thestuccodecor/",
  },
  {
    id: 4,
    label: "linkedin",
    icon: <FillLinkedin />,
    href: "https://www.linkedin.com/in/stucco-decor-486b46212/",
  },
];
export const SocialLink2: socialLinkProps[] = [
  {
    id: 1,
    label: "facebook",
    icon: <FillFacebookIcon />,
    href: "https://www.facebook.com/people/Stuccodecorcom/100068907789285/?ref=pages_you_manage#",
  },
  {
    id: 2,
    label: "twitter",
    icon: <FillTwitterIcon />,
    href: "https://x.com/Stuccodecor1",
  },
  {
    id: 3,
    label: "instagram",
    icon: <FillInstagramIcon />,
    href: "https://www.instagram.com/thestuccodecor/",
  },
  {
    id: 4,
    label: "linkedin",
    icon: <FillLinkedinIcon />,
    href: "https://www.linkedin.com/in/stucco-decor-486b46212/",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "Home",
        href: "/",
      },
      {
        id: 2,
        label: "What We Do",
        href: "/what-we-do",
      },
      {
        id: 3,
        label: "Exterior Products",
        href: "/exterior-products",
      },
      {
        id: 4,
        label: "Portfolio",
        href: "/portfolio",
      },
      {
        id: 5,
        label: "Download our Catalogue",
        href: "https://stuccodecor.com/wp-content/uploads/2024/06/21263-Stucco-Decor-2024-Catalogue_DIGITAL-3.pdf",
      },
      {
        id: 6,
        label: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  {
    id: 2,
    title: "Working Hours",
    links: [
      {
        id: 1,
        title: "Mon - Fri :",
        label: "7:00 AM - 4:30 PM",
      },
      {
        id: 3,
        title: "saturday :",
        label: "8:00 AM - 12:00 PM",
      },
      {
        id: 2,
        title: "sunday :",
        label: "closed",
      },
    ],
  },
  {
    id: 3,
    title: "contact details",
    links: [
      {
        id: 1,
        title: "mail :",
        label: "info@stuccodecor.com",
        href: "mailto:info@stuccodecor.com",
        icon: <FillMailIcon />,
      },
      {
        id: 2,
        title: "number :",
        label: "647-477-6066",
        href: "tel:647-477-6066",
        icon: <FillCallIcon />,
      },
      {
        id: 3,
        title: "address :",
        label: "6101 Netherhart Rd., # 1, Mississauga, ON, L5T 1G5",
        href: "https://maps.app.goo.gl/bhppnhuAjQcPcqXG8",
        icon: <FillLocationIcon />,
      },
    ],
  },
];
