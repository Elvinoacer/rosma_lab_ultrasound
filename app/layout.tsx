import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import { site } from "./lib/site";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Ultrasound & Diagnostics, Kasarani`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://rosmalab.co.ke"),
  openGraph: {
    title: `${site.name} · Ultrasound & Diagnostics, Kasarani`,
    description: site.description,
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/previewimage.webp",
        width: 1200,
        height: 630,
        alt: "Rosma Laboratory — Ultrasound & Diagnostics, Kasarani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Ultrasound & Diagnostics, Kasarani`,
    description: site.description,
    images: ["/images/previewimage.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col mesh">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
