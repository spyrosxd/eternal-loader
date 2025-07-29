import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eternal Loader",
  description: "A website that never finishes loading. Just like life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
