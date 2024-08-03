interface ChartInterface {
  children: React.ReactNode;
}
const ChartLayout = ({ children }: ChartInterface) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="text-2xl tracking-wider font-medium text-slate-600 uppercase">
        Monthly Digest
      </h1>
      <div className="flex md:flex-row sm:flex-col sm:pb-10 justify-between w-[100%]">
        {children}
      </div>
    </div>
  );
};

export default ChartLayout;
