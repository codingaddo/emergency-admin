interface PropInterface {
  title: string;
  icon: React.ReactNode;
  num: number;
  percent: number | React.ReactNode;
  bgColor: string;
  color: string;
}

const Container = ({
  title,
  icon,
  num,
  percent,
  bgColor,
  color,
}: PropInterface) => {
  return (
    <div
      className={`rounded-lg hover:shadow-lg shadow bg-blue-50 cursor-pointer flex flex-col items-center justify-between pb-4 pt-7 px-5 h-32 sm:min-w-[320px]  lg:min-w-52`}
    >
      <div className="flex items-center gap-16 ">
        <span className="text-lg font-normal">
          {percent}
          {typeof percent === "number" ? "%" : ""}
        </span>
        <span className={`text-xl font-semibold ${color} `}>{num}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className={`border ${bgColor} rounded-full p-1`}>{icon}</div>
        <h1 className="text-lg font-medium uppercase text-blue-950">{title}</h1>
      </div>
    </div>
  );
};

export default Container;
