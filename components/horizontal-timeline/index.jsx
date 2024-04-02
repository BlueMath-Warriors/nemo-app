import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const TimelinePartition = ({ career, index }) => {
  const backgroundVariants = {
    0: "group-hover:bg-[#FF9800]",
    1: "group-hover:bg-[#2C7865]",
    2: "group-hover:bg-[#D24545]",
    3: "group-hover:bg-[#D2DE32]",
    4: "group-hover:bg-[#61A3BA]",
    5: "group-hover:bg-[#A3423C]",
  };

  const textVariants = {
    0: "group-hover:text-[#FF9800]",
    1: "group-hover:text-[#2C7865]",
    2: "group-hover:text-[#D24545]",
    3: "group-hover:text-[#D2DE32]",
    4: "group-hover:text-[#61A3BA]",
    5: "group-hover:text-[#A3423C]",
  };

  return (
    <div key={index} className={"w-full rounded relative cursor-pointer " + poppins.className} >
      <div
        className={`timeline-circle relative w-8 h-8 rounded-full ${index % 2 === 0 ? "top-[-100px]" : "top-[-20px]"} bg-[#B5C0D0] ${backgroundVariants[index]}`}
      ></div>
      <div
        className={`heading-circle absolute w-6 h-6 rounded-full left-[4px] ${
          index % 2 === 0 ? "bottom-[232px]" : "top-[144px]"
        } bg-[#B5C0D0] ${backgroundVariants[index]}`}
      ></div>
      <div
        className={`career relative flex flex-col items-start justify-start h-32 w-full ${
          index % 2 === 0 ? "mt-[-295px] " : "mt-[10px]"
        }`}
      >
        <div
          className={`vertical-line absolute h-36 w-2 bg-[#B5C0D0] rounded ${index % 2 === 0 ? "mt-[23px] left-[12px]" : "mt-[-35px] left-[11px]" } ${
            backgroundVariants[index]
          } 
          `}
        ></div>
        <div className={`career-content flex relative flex-col left-[35px] group-hover:scale-110 group-hover:translate-x-6 ${index % 2 === 0 ? "" : "mt-[15px]"}`}>
          <p className={`text-3xl font-bold ${textVariants[index]}`}>
            {career.Company}
          </p>
          <p className={`text-xl font-bold`}>{career.Position}</p>
          <p
            className={`text-xl italic`}
          >{`${career.Start} - ${career.End}`}</p>
        </div>
      </div>
    </div>
  );
};

const HorizontalTimeline = ({ careers }) => {
  return (
    <div className="flex border-nemo-light-blue rounded-l-xl w-full justify-between items-center border-t-8 ">
      {careers.map((career, index) => (
        <TimelinePartition career={career} index={index} />
      ))}
    </div>
  );
};

export default HorizontalTimeline;
