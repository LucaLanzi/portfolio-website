import type { Metadata } from "next";
import { JetBrains_Mono, Titillium_Web } from "next/font/google";
import Starfield from "@/components/background/Starfield";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Vulf Mono (requested) is a $90 paid commercial font with no free web-license
// tier, so it can't be sourced/embedded here. JetBrains Mono is used instead —
// a free, characterful monospace in a similar "distinctive coded" spirit,
// covering both headings and small labels.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Luca Lanzillotta | Electrical Engineering Portfolio";
const description =
  "Portfolio of Luca Lanzillotta, 5th-year Electrical Engineering student at Cal Poly Pomona.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${titillium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-space-black text-star-white">
        <Starfield />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
