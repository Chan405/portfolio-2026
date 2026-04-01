import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shell } from "@/components/layout/Shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chan's Portfolio",
  description: "Personal portfolio",
  icons: {
    icon: [
      { url: "/brand/Chan.png?v=1", type: "image/png" },
      { url: "/brand/Chan.png?v=1", type: "image/png", sizes: "32x32" },
      { url: "/brand/Chan.png?v=1", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/brand/Chan.png?v=1", type: "image/png" }],
    shortcut: ["/brand/Chan.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
