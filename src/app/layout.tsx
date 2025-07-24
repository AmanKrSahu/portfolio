import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Portfolio - Professional Chronicle",
  description: "A newspaper-style portfolio showcasing professional achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
