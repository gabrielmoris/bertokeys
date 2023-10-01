"use client";
import { useState } from "react";
import { Dropdown } from "../uiComponents/dropdown";

export const Presupuesto = () => {
  const options = [
    { option: "Option 1", valueOfOption: "option1" },
    { option: "Option 2", valueOfOption: "option2" },
    { option: "Option 3", valueOfOption: "option3" },
  ];
  const [selectedValue, setSelectedValue] = useState(options[0].valueOfOption);

  const handleDropdownChange = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <section className="w-full flex flex-col items-center justify-center my-5" id="presupuesto">
      <p className="font-zendots text-xl  md:text-2xl font-bold text-center m-10">Presupuesto</p>
      <Dropdown options={options} onChange={handleDropdownChange} />
    </section>
  );
};
