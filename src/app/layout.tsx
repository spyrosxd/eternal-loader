import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eternal Loader – The Infinite Loading Experience",
  description:
    "Experience the eternal loading of life with quirky animations, weird messages, and a cat chasing its tail. A website that never finishes loading, just like life itself.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Eternal Loader – The Infinite Loading Experience",
    description:
      "A website that never finishes loading, featuring quirky animations and weird loading messages.",
    siteName: "Eternal Loader",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eternal Loader preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
