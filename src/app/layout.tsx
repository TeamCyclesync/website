import type { Metadata, Viewport } from "next";
import { Play, Roboto, Catamaran, Poppins, Anton, Space_Grotesk } from "next/font/google"; // Import Six Caps
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// Import and configure the fonts
const play = Play({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: "800",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Cyclesync - Feel Better, Work Smarter, Live Healthier",
    template: "%s | Cyclesync"
  },
  description: "Cyclesync helps women track menstrual cycles, gain AI insights, and explore personalized fitness and nutrition for smarter period management",
  keywords:"menstual cycle tracker, women's health app, period tracker, nutrition, fitness, AI insights, lifestyle, cyclesync",
  authors: [{name: "Lakshdeep Singh", url: "https://www.linkedin.com/in/lakshdeepsingh2003"}, {name: "Kamatham Soujanya", url: "https://www.linkedin.com/in/kamatham-soujanya-linkdin"}],
  creator: "Cylesync Team",
  publisher: "Cyclesync",
  metadataBase: new URL('https://www.cyclesync.in'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  category: "Health & Fitness",
  verification: {
    google: "P_M_8FVsu3FK6y7cYPWw9vnVQBNOSiiMKrK2JOOdiA8"
  },
  alternates: {
    canonical: "https://www.cyclesync.in/"
  },

  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://www.cyclesync.in",
    title: "Cyclesync - AI-Powered Menstrual Cycle Tracking & Wellness",
    description: "Transform your health with personalized period tracking, AI insights, and wellness recommendations tailored to your cycle.",
    siteName: "Cyclesync",
    images: [
      {
        url: "/assets/ogimg.png",
        width: 1200,
        height: 630,
        alt: "Cyclesync - Women's Health & Wellness Platform"
      },
      {
        url: "/assets/ogimg-sq.png",
        width: 256,
        height: 256,
        alt: "Cyclesync - Women's Health & Wellness Platform"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${roboto.className}  ${play.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
