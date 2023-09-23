import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const lato = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Keys Animation",
  description: "La web del Dj Keys Animacion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
