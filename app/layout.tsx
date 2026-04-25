import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SunyaOne — Web & Mobile Engineering Partner",
  description:
    "SunyaOne (01) is a contract software studio building web apps, mobile apps, and the DevOps that runs them. React, Next.js, React Native, Python, Django, FastAPI, Node.js, Go.",
  keywords: [
    "SunyaOne",
    "software development",
    "web development",
    "mobile app development",
    "Next.js agency",
    "React Native agency",
    "Django",
    "FastAPI",
    "DevOps",
  ],
  authors: [{ name: "SunyaOne" }],
  openGraph: {
    title: "SunyaOne — Web & Mobile Engineering Partner",
    description:
      "Contract software studio for web, mobile, and DevOps. Ship faster with a senior team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
