import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Surveillance Infrastructure Specialists`,
  description: SITE.tagline,
  metadataBase: new URL("https://morubisi.co.za"),
  icons: {
    icon: "/images/logos/morubisi-icon.png",
    shortcut: "/images/logos/morubisi-icon.png",
    apple: "/images/logos/morubisi-icon.png",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: "website",
    images: ["/images/logos/morubisi-logo-full.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
