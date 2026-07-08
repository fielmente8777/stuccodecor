import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import { Footer, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stucco Decor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8fDDj3LRhkAfCt2N53kJ23ZyflTaIEwFbrI5ujdsTDQ" />
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
