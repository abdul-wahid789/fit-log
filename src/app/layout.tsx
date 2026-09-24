import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { ToastContainer } from "react-toastify";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fit Log",
  description: "Fitness activity tracker web app.",
};

export default function RootLayout({ children }:
  { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="fit-log"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className={`${oswald.className} min-h-full flex flex-col`}>
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

