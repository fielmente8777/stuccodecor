import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import { Footer, Navbar } from "@/components";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Exterior Stucco & EIFS Moulding Manufacturer | Mississauga, ON | Stucco Décor",
  description:
    "Custom EIFS & stucco exterior mouldings manufactured in Mississauga since 2008. Durable, affordable architectural trim for homeowners, builders & architects. Get a free quote today.",
  alternates: {
    canonical: "https://stuccodecor.com/",
  },
  openGraph: {
    title:
      "Exterior Stucco & EIFS Moulding Manufacturer | Mississauga, ON | Stucco Décor",
    description:
      "Custom EIFS & stucco exterior mouldings manufactured in Mississauga since 2008. Durable, affordable architectural trim for homeowners, builders & architects. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8fDDj3LRhkAfCt2N53kJ23ZyflTaIEwFbrI5ujdsTDQ"
        />
        <Script
          id="ld-json"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Stucco Décor Moulding",
              image:
                "https://stuccodecor.com/_next/image/?url=%2Flogo.png&w=640&q=75&dpl=dpl_9Xy3MDo1da4y79qH4j2ELTSrkWpC",
              url: "https://stuccodecor.com/",
              telephone: "+1-647-477-6066",
              email: "info@stuccodecor.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6101 Netherhart Rd., #1",
                addressLocality: "Mississauga",
                addressRegion: "ON",
                postalCode: "L5T 1G5",
                addressCountry: "CA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "16:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/people/Stuccodecorcom/100068907789285/",
                "https://x.com/Stuccodecor1",
                "https://www.instagram.com/thestuccodecor/",
                "https://www.linkedin.com/in/stucco-decor-486b46212/",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "18",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        {/* <Whatsapp whatsAppNumber="1234567890" />
        <Call callNumber="1234567890" /> */}
      </body>
    </html>
  );
}
