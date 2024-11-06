import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const corben = localFont({
  src: "./fonts/Corben.ttf",
  variable: "--font-corben",
  weight: "100 900",
});
const cormorantUpright = localFont({
  src: "./fonts/Cormorant Upright.ttf",
  variable: "--font-cormorant-upright",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Save My Spot",
  description: "Reserve Today, Relax Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${corben.variable} ${cormorantUpright.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
