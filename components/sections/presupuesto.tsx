"use client";
import { useState } from "react";
import { Dropdown } from "../uiComponents/dropdown";
import { Button } from "../uiComponents/button";

const options = [
  [
    { option: "A Coruña (150€)", valueOfOption: 150 },
    { option: "Pontevedra (150€)", valueOfOption: 150 },
    { option: "Lugo (170€)", valueOfOption: 170 },
    { option: "Ourense (180€)", valueOfOption: 180 },
    { option: "Resto de España (220€)", valueOfOption: 220 },
  ],
  [
    { option: "Si (100€)", valueOfOption: 100 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si con un listado de música de ambiente (60€)", valueOfOption: 60 },
    { option: "Si y pinchar en directo (120€)", valueOfOption: 120 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si (entrada al banquete, música de ambiente y entregas de regalos si los hay) (60€)", valueOfOption: 60 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "1h (70€)", valueOfOption: 70 },
    { option: "2h (135€)", valueOfOption: 135 },
    { option: "3h (180€)", valueOfOption: 180 },
    { option: "4h (240€)", valueOfOption: 240 },
  ],
  [
    { option: "1 (40€)", valueOfOption: 40 },
    { option: "2 (60€)", valueOfOption: 60 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si (50€)", valueOfOption: 50 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si (475€)", valueOfOption: 475 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si (475€)", valueOfOption: 475 },
    { option: "No", valueOfOption: 0 },
  ],
  [
    { option: "Si (70€)", valueOfOption: 70 },
    { option: "No", valueOfOption: 0 },
  ],
];
const titles = [
  "Lugar del evento",
  "Ceremonia civil sonorizada",
  "Aperitivos",
  "Comida",
  "Horas de baile/barra libre",
  "Bengala de fuego frio",
  "Proyector o TV para proyección de videos e imágenes",
  "Fotomatón",
  "Plataforma 360",
  "Karaoke para eventos con: pantalla, micrófonos inalámbricos y técnico para controlar el sonido y la elección de canciones. Precio por hora",
];

export const Presupuesto = () => {
  const [stage, setStage] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState(stage < 10 ? options[stage][0] : options[0][0]);
  const [budget, setBudget] = useState(0);
  const [userSelections, setUserSelections] = useState<any>([]);

  const handleDropdownChange = (value: any) => {
    setSelectedValue(value);
  };

  const handleBtnClick = () => {
    if (stage < 10) setBudget(budget + selectedValue.valueOfOption);
    const selection = { title: titles[stage], ...selectedValue };
    setUserSelections([...userSelections, selection]);
    setSelectedValue(stage < 9 ? options[stage + 1][0] : options[0][0]);
    setStage(stage + 1);
  };

  return (
    <section className=" w-full xl:w-[70%] xl:px-10 px-8 border-2 pb-10 rounded flex flex-col items-center justify-center my-5" id="presupuesto">
      <p className="font-zendots text-xl  md:text-2xl font-bold text-center m-10">Presupuesto</p>
      {stage < 9 && <Dropdown key={stage} options={options[stage]} onChange={handleDropdownChange} title={titles[stage]} />}
      <Button btnFunction={handleBtnClick} btnLabel={"label"} />
      <div className="w-full mt-10 flex justify-end">{budget}€</div>
    </section>
  );
};
