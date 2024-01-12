export const Button = ({ btnLabel, btnFunction }: { btnLabel: string; btnFunction: (arg: any) => any }) => {
  return (
    <button className="mt-2 w-28 h-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onClick={btnFunction}>
      <span className="dark:text-black font-zendots">{btnLabel}</span>
    </button>
  );
};
