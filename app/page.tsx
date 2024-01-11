import { Multimedia } from "@/components/sections/multimedia";
import { Presupuesto } from "@/components/sections/presupuesto";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-5 md:p-24" style={{ minHeight: "calc(100vh - 6.5rem)" }}>
      {/* <p className="font-zendots text-xl  md:text-2xl font-bold text-center m-10">Keys Animation</p> */}
      {/* <Multimedia /> */}
      <Presupuesto />
    </main>
  );
}

// https://developers.google.com/my-business/content/review-data?hl=es
