import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

function Chart() {
  return (
    <div className="flex items-center justify-center gap-x-10">
      <div>
        <RadialProgress typeChart={true} primary={true} title="Done" />
      </div>
      <div>
        <RadialProgress primary={false} title="NotDone" />
      </div>
    </div>
  );
}

export default Chart;

interface RadialProgressProps {
  primary: boolean;
  title: string;
  typeChart?: boolean;
}

const RadialProgress: React.FC<RadialProgressProps> = ({
  primary,
  title,
  typeChart,
}) => {
  const count = useSelector((state: RootState) => state.todoList);
  const completeItem = count.filter((item) => {
    return item.complete === true;
  }).length;

  let percentageDone = 0;
  let percentageNotDone = 0;

  if (count.length) {
    percentageDone = +((completeItem / count.length) * 100).toFixed(0);
    percentageNotDone = Math.abs(
      +(((completeItem - count.length) / count.length) * 100).toFixed(0)
    );
  }
  const value = typeChart ? percentageDone : percentageNotDone;

  return (
    <>
      <div
        className={`radial-progress  text-primary-content  border-4 ${
          primary
            ? "border-primary bg-primary"
            : "bg-secondary border-secondary"
        }`}
        style={{ "--value": value } as React.CSSProperties}
        role="progressbar"
      >
        {typeChart ? `${percentageDone}%` : `${percentageNotDone}%`}
      </div>
      <p className="text-center mt-3 text-lg">{title}</p>
    </>
  );
};
