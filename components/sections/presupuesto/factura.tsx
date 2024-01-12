const removePriceFromOption = (inputString: string) => {
  const pattern = /\(\d+€\)/g;
  const result = inputString.replace(pattern, "");
  return result;
};

export const Factura = ({ userSelections }: any) => {
  return (
    <div>
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
    </div>
  );
};
