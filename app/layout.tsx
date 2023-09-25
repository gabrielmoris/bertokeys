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
      <body
        className={`${lato.className} bg-gradient-to-b dark:from-black duration-500 dark:to-[#131633] dark:text-white from-white to-[rgb(204,208,245)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
