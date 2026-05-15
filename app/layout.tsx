import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sambawebsite.agency"),
  title: {
    default: "Samba Website | Premium Web Development Agency",
    template: "%s | Samba Website",
  },
  description:
    "Samba Website builds modern, conversion-focused digital experiences with Next.js, Shopify, UI/UX design, performance optimization, and SEO-ready development.",
  keywords: [
    "Web Development",
    "Next.js Agency",
    "Shopify Solutions",
    "UI UX Design",
    "Performance Optimization",
    "SEO-ready Development",
  ],
  openGraph: {
    title: "Samba Website | Premium Web Development Agency",
    description:
      "Modern websites and e-commerce experiences crafted to convert and scale.",
    url: "https://sambawebsite.agency",
    siteName: "Samba Website",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samba Website | Premium Web Development Agency",
    description:
      "Modern websites and e-commerce experiences crafted to convert and scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
