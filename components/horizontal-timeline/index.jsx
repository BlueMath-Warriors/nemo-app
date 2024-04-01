import { useEffect, useState } from "react";

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
    <div key={index} className="group w-full relative cursor-pointer">
      {/* Circle on timeline */}
      <div
        className={` relative w-8 h-8 rounded-full top-[-20px] bg-gray-200 ${backgroundVariants[index]}`}
      ></div>
      {/* The small circle on left of company name */}
      <div
        className={`absolute w-6 h-6 rounded-full left-[4px] ${
          index % 2 === 0 ? "bottom-[335px]" : "top-[170px]"
        } bg-gray-200 ${backgroundVariants[index]}`}
      ></div>
      {/* The vertical Line on Timeline */}
      <div
        className={`relative flex flex-col items-start justify-start h-32 w-full`}
      >
        <div
          className={`absolute h-36 w-2 bg-white rounded left-[11.5px] ${
            backgroundVariants[index]
          } ${index % 2 === 0 ? "bottom-[185px]" : "top-[-12px]"}`}
        ></div>
        <div
          className={`flex relative flex-col left-[35px] ${
            index % 2 === 0 ? "bottom-[237px] " : "top-[133px]"
          }`}
        >
          <p className={`text-2xl font-bold ${textVariants[index]}`}>
            {career.Company}
          </p>
          <p className={`text-xl`}>{career.Position}</p>
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
    <div className="flex w-full justify-between items-center border-t-8 ">
      {careers.map((career, index) => (
        <TimelinePartition career={career} index={index} />
      ))}
    </div>
  );
};

export default HorizontalTimeline;
