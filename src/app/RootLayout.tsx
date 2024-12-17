import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata: Metadata = {
  title: "Portfolio de Sandrine ALCAZAR - Développeuse Front-end",
  description:
    "Découvrez le portfolio de Sandrine ALCAZAR, développeuse front-end passionnée par la création de sites web modernes et interactifs.",
  keywords:
    "développeur front-end, portfolio, création de sites web, développement React, développement Next.js",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Sandrine ALCAZAR", url: "" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
