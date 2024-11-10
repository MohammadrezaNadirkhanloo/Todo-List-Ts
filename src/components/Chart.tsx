function Chart() {
  return (
    <div className="flex items-center justify-center gap-x-10">
      <div>
        <RadialProgress value={70} primary={true} title="Done" />
      </div>
      <div className="">
        <RadialProgress value={40} primary={false} title="NotDone" />
      </div>
    </div>
  );
}

export default Chart;

import React from "react";

interface RadialProgressProps {
  value: number;
  primary: boolean;
  title:string
}

const RadialProgress: React.FC<RadialProgressProps> = ({ value, primary,title }) => {
  return (
    <>
    
    <div
      className={`radial-progress  text-primary-content  border-4 ${
        primary ? "border-primary bg-primary" : "bg-secondary border-secondary"
      }`}
      style={{ "--value": value } as React.CSSProperties}
      role="progressbar"
    >
      {value}%
    </div>
    <p className="text-center mt-3 text-lg">{title}</p>
    </>
  );
};
