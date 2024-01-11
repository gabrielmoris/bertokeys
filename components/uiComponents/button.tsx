export const Button = ({ btnLabel, btnFunction }: { btnLabel: string; btnFunction: (arg: any) => any }) => {
  return <button onClick={btnFunction}>{btnLabel}</button>;
};
