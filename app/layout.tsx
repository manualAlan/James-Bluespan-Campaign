import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Outfit } from "next/font/google";
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

const campaign = Outfit({
  variable: "--font-campaign",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "James Bluespan 2070 | Chasmia, Forward",
  description: "Re-elect James Bluespan in 2070. Proven leadership and a clear agenda for lasting prosperity, education, clean power, and a connected Chasmia.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${campaign.variable}`}>
        {children}
        <script src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/campaign.js`} defer />
      </body>
    </html>
  );
}
