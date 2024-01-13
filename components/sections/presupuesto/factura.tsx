import html2canvas from "html2canvas";
import { useRef } from "react";
import Image from "next/image";
import { Input } from "../../uiComponents/input";

const removePriceFromOption = (inputString: string) => {
  const pattern = /\(\d+€\)/g;
  const result = inputString.replace(pattern, "");
  return result;
};

export const Factura = ({ userSelections, budget }: any) => {
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
      <div className="mb-8">
        <Input
          label="Nombre y apellidos"
          type="text"
          name="nombre"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Input
          label="Lugar de la celebración"
          type="text"
          name="lugar"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Input
          label="Fecha de la celebración"
          type="date"
          name="fecha"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Input
          label="Más Información / Notas"
          type="textarea"
          name="info"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>

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
      <p className="w-full mt-2 flex justify-end">
        <span className="font-bold text-md px-2">Total:</span>
        {budget}€
      </p>
    </div>
  );
};
