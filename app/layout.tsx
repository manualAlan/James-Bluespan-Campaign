import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manualalan.github.io/James-Bluespan-Campaign/"),
  title: "James Bluespan | Chasmia, Forward",
  description: "Proven leadership. Sound governance. A stronger Chasmia.",
  openGraph: {
    title: "James Bluespan | Chasmia, Forward",
    description: "Proven leadership. Sound governance. A stronger Chasmia.",
    images: ["/James-Bluespan-Campaign/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Bluespan | Chasmia, Forward",
    description: "Proven leadership. Sound governance. A stronger Chasmia.",
    images: ["/James-Bluespan-Campaign/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
