import React, { useState } from "react";
import Image from "next/image";

const Search = () => {
  const [career, setCareer] = useState("");
  const [careers, setCareers] = useState(["COO", "CEO", "CFO"]);
  const [showList, setShowList] = useState(false);
  return (
    <div
      class="relative flex items-center justify-start gap-4 text-base leading-7 text-gray-600"
      onClick={() => setShowList(true)}
      onBlur={() => setShowList(false)}
    >
      <input
        type="text"
        list="career-data-list"
        className="h-[30px] md:h-[50px] max-w-[430px] w-4/5 text-xl md:text-3xl text-nemo px-4"
        value={career}
        onChange={(e) => {
          setCareer(e.target.value);
        }}
      />

      <div
        className={`${
          showList ? "flex" : "hidden"
        } flex-col absolute left-0 top-[30px] md:top-[50px] bg-white max-w-[430px] w-4/5 text-xl md:text-3xl text-nemo px-4 py-2`}
      >
        {careers.map((item) => {
          return (
            <>
              <div
                onClick={() => {
                  setCareer(item);
                }}
              >
                <p className="cursor-pointer">{item}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>

      <Image
        src={"/images/right-search-arrow.svg"}
        width={50}
        height={50}
        className={"w-[30px] h-[30px]  md:h-[50px] md:w-[50px]"}
        style={{ transform: "scaleX(-1)", margin: "0" }}
      />
    </div>
  );
};

export default Search;
