import type { Metadata } from "next";
import { BBH_Bartle, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

/**
 * Display face — all-caps, very wide, single 400 weight. Never set a bold
 * on it, and keep headline copy short. Next has no metric overrides for it,
 * so the fallback chain is declared explicitly.
 */
const bartle = BBH_Bartle({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-bartle",
});

const southCatalonia = localFont({
  src: "./fonts/SouthCatalonia.otf",
  variable: "--font-south-catalonia",
});

export const metadata: Metadata = {
  title: {
    default: "SAILOR — Luxury Yacht Charter",
    template: "%s | SAILOR",
  },
  description:
    "Premier yacht charter service, where luxury meets adventure on the open seas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${bartle.variable} ${southCatalonia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
