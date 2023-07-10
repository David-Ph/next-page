import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David - Software Developer",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/f137a091ba.js"
        crossOrigin="anonymous"
      ></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
