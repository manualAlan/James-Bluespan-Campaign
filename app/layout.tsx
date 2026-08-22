import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600","700","800","900"] });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://manualalan.github.io/JB-Stoner-2064/"),
  title: "JB Stoner 2064 | Keep Myrati Moving",
  description: "JB Stoner for Myrati in 2064. Steady leadership, proven investment, and a future worth building.",
  openGraph: {
    title: "JB Stoner 2064 | Keep Myrati Moving",
    description: "Rachel is back. JB Stoner is ready to keep Myrati moving.",
    images: [{ url: "/JB-Stoner-2064/og.png", width: 1728, height: 909, alt: "She's back. JB Stoner 2064. Keep Myrati moving." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Stoner 2064 | Keep Myrati Moving",
    description: "Rachel is back. JB Stoner is ready to keep Myrati moving.",
    images: ["/JB-Stoner-2064/og.png"],
  },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
