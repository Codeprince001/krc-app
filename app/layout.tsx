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
  metadataBase: new URL("https://thechurchworldwide.org"),
  title: {
    default: "The Kingdom Church Mobile App",
    template: "%s | The Kingdom Church",
  },
  description:
    "Stay connected with The Kingdom Church through devotionals, sermons, events, prayer community, and more.",
  openGraph: {
    type: "website",
    url: "https://thechurchworldwide.org",
    title: "The Kingdom Church Mobile App",
    description:
      "Stay connected with The Kingdom Church through devotionals, sermons, events, prayer community, and more.",
    siteName: "The Kingdom Church",
    images: [
      {
        url: "/church-logo.png",
        width: 1200,
        height: 630,
        alt: "The Kingdom Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kingdom Church Mobile App",
    description:
      "Stay connected with The Kingdom Church through devotionals, sermons, events, prayer community, and more.",
    images: ["/church-logo.png"],
  },
  icons: {
    icon: "/church-logo.png",
    apple: "/church-logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
