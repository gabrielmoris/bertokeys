import { Multimedia } from "@/components/sections/multimedia";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Keys Animation</p>
      <div id="multimedia"></div>
      <Multimedia />
    </main>
  );
}

// https://developers.google.com/my-business/content/review-data?hl=es
