import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tyler Cox | AI Product Engineer & Full Stack Product Builder",
  description:
    "Tyler Cox builds AI-powered, full-stack consumer products with polished UX, conversational AI systems, and production-ready engineering.",
  openGraph: {
    title: "Tyler Cox | AI Product Engineer",
    description:
      "AI Product Engineer and Full Stack Product Builder focused on conversational AI, polished UX, and real shipped products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
