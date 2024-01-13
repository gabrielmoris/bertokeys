import html2canvas from "html2canvas";
import { useRef } from "react";
import Image from "next/image";

const removePriceFromOption = (inputString: string) => {
  const pattern = /\(\d+€\)/g;
  const result = inputString.replace(pattern, "");
  return result;
};

export const Factura = ({ userSelections }: any) => {
  const componentRef = useRef(null);

  const captureScreenshot = () => {
    if (componentRef.current) {
      const rootElement = document.documentElement;
      rootElement.classList.remove("dark");
      window.localStorage.setItem("darkMode", "false");
      html2canvas(componentRef.current)
        .then((canvas) => {
          const dataUrl = canvas.toDataURL();

          const downloadLink = document.createElement("a");
          downloadLink.href = dataUrl;
          downloadLink.download = "factura.png";

          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          rootElement.classList.add("dark");
          window.localStorage.setItem("darkMode", "true");
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };

  return (
    <div ref={componentRef} className="p-10">
      {userSelections.map((selection: { option: string; valueOfOption: number; title: string }) => {
        return (
          <section key={selection.title + selection.option}>
            <p className="font-bold text-md">{selection.title}</p>

            <section className="flex justify-between flex-row mb-5 border-b border-dotted border-black dark:border-white opacity-60">
              <div className="font-light text-sm">{removePriceFromOption(selection.option)}</div>
              <div className="font-light text-sm">{selection.valueOfOption}€</div>
            </section>
          </section>
        );
      })}

      <div onClick={captureScreenshot} className="items-center cursor-pointer inline-flex">
        <Image priority src={"/download_icon.svg"} width={5} height={5} alt="Keys Animation Logo" className="cursor-pointer w-5 mr-1" />
        <p className="text-xs">Descargar</p>
      </div>
    </div>
  );
};
