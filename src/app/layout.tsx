import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/Project/project.css";

import LenisSmooth from "@/components/Lenis/LenisSmooth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export as required by Next.js
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // Optional: you can add a theme color
};

export const metadata: Metadata = {
  title: "Harsh Lamba | Portfolio",
  description:
    "Welcome to the portfolio of Harsh Lamba, a web developer and programmer. Explore my work, projects, and learn more about me.",
  keywords: "Harsh Lamba, portfolio, lambaharsh, lambaharsh01, web developer, programmer, harsh, harsh lamba, projects, web development portfolio",
  metadataBase: new URL("https://lambaharsh01.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Harsh Lamba | Portfolio",
    description:
      "Explore the portfolio of Harsh Lamba, a talented web developer. View projects, experience, and more.",
    url: "https://lambaharsh01.in",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Harsh Lamba Portfolio Image",
      },
    ],
    siteName: "Harsh Lamba's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Lamba | Portfolio",
    description:
      "Explore the portfolio of Harsh Lamba, a talented web developer. View projects, experience, and more.",
    images: ["/favicon.ico"],
    creator: "@harshlambadev", // Be sure to update this with your actual handle
  },
  icons: {
    icon: "/favicon.ico", // Consider creating a proper favicon
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data for personal portfolio
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Harsh Lamba",
  "url": "https://lambaharsh01.in",
  "jobTitle": "Web Developer",
  "description": "Web developer and programmer specializing in modern web technologies.",
  "sameAs": [
    "https://github.com/lambaharsh01",
    "https://www.linkedin.com/in/harsh-lamba-1b185b214"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisSmooth>
          {children}
        </LenisSmooth>
      </body>
    </html>
  );
}