import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";

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
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        <Whatsapp whatsAppNumber="1234567890" />
        <Call callNumber="1234567890" />
      </body>
    </html>
  );
}
