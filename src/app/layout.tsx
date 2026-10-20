import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tyler Cox | Software Engineer 2027 | Full-Stack, Backend & AI",
  description:
    "Ohio State CSE student graduating May 2027. React, TypeScript, Python, FastAPI, PostgreSQL, AI workflows, security and tested full-stack software projects.",
  openGraph: {
    title: "Tyler Cox | 2027 Software Engineering New Grad",
    description:
      "Ohio State CSE May 2027 student building IncidentOps and MacroMesh with React, FastAPI, PostgreSQL and applied AI integration.",
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
