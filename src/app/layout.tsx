import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Portfolio de Sandrine ALCAZAR - Développeuse Front-end",
  description:
    "Découvrez le portfolio de Sandrine ALCAZAR, développeuse front-end passionnée par la création de sites web modernes et interactifs.",
  keywords:
    "développeur front-end, portfolio, création de sites web, développement React, développement Next.js",
  robots: "index, follow",
  authors: [{ name: "Sandrine ALCAZAR", url: "" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased max-w-7xl px-8 mx-auto">
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main className="flex flex-col   ">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
