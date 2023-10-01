import { Multimedia } from "@/components/sections/multimedia";
import { Presupuesto } from "@/components/sections/presupuesto";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <p>Keys Animation</p>
      <Multimedia />
      <Presupuesto />
    </main>
  );
}

// https://developers.google.com/my-business/content/review-data?hl=es
