import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/universal/sidenav";
import Image from "next/image";
import TopNav from "./ui/universal/topnav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Ballroom and Latin Dance Steps",
  description: "A registry of all the syllabus steps for International Style Ballroom and Latin along with video clips for each step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Creating global NavBar and burger menus
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="overscroll-none min-h-full flex flex-col bg-auto">
        <header className="flex flex-row fixed w-full top-0 left-0 h-18 z-10 backdrop-blur-xs items-center justify-center bg-neutral-950/95 text-white text-lg">
	        <TopNav />
        </header>
        <div className="flex flex-row flex-1 mt-12 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
