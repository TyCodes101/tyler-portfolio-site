import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tyler-portfolio-site.vercel.app"),
  alternates: { canonical: "/" },
  title: "Tyler Cox | Software Engineer 2027 | Full-Stack, Backend & AI",
  description:
    "Ohio State CSE student graduating May 2027. React, TypeScript, Python, FastAPI, PostgreSQL, AI workflows, security and tested full-stack software projects.",
  openGraph: {
    title: "Tyler Cox | 2027 Software Engineering New Grad",
    description:
      "Ohio State CSE, May 2027. Explore IncidentOPS, MacroMesh, and a CPU Scheduler Visualizer. Available June/July 2027 in Columbus or US remote.",
    type: "website",
    url: "https://tyler-portfolio-site.vercel.app",
    siteName: "Tyler Cox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Cox | Software Engineering, Ohio State ’27",
    description:
      "Full-stack projects, the engineering behind them, and what I’m building next.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
