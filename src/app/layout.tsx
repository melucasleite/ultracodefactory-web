import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "For solo builders with ambitious projects: write the backlog, grab a coffee, and come back to a stack of pull requests built by Claude Code agents. A native, open-source Mac app.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ultracodefactory.com"),
  title: "Code Factory: write the backlog, grab a coffee, review the PRs",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Code Factory",
    description,
    url: "/",
    siteName: "Code Factory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Factory",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <div className="aurora" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
