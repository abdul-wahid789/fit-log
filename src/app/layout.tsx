import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Toast from "./components/shared/Toast";


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
      data-scroll-behavior="smooth"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className={`${oswald.className} min-h-full flex flex-col`}>
        <Toast>
            {children}
        </Toast>
      </body>
    </html>
  );
}

