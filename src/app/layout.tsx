import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import Navigation from "@/components/nav/Navigation";
import HeroFloatingImage from "@/components/landing/HeroFloatingImage";
import Image from "next/image";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Lydia | The App",
  description: "Developed for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative overflow-hidden`}
      >
        {children}

        <HeroFloatingImage className="top-[6rem] bg-transparent" slideFrom="left">
          <Image src={"/assets/hero1.jpg"} alt="Hero Image" fill className="object-cover rounded-lg opacity-90"/>
        </HeroFloatingImage>
        <HeroFloatingImage className="top-[12rem] bg-transparent" slideFrom="right">
          <Image src={"/assets/hero2.jpg"} alt="Hero Image" fill className="object-cover rounded-lg opacity-90"/>
        </HeroFloatingImage>
      </body>
    </html>
  );
}
