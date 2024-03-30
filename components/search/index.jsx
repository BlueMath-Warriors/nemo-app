import React, { useState } from "react";
import Image from "next/image";

const Search = () => {
  const [career, setCareer] = useState("");
  const [careers, setCareers] = useState(["COO", "CEO", "CFO"]);
  return (
    <div class="flex items-center justify-center gap-4 text-base leading-7 text-gray-600">
      <input
        type="text"
        list="career-data-list"
        className="h-[30px] md:h-[50px] max-w-[430px] w-4/5 text-xl md:text-3xl text-nemo px-4"
        value={career}
        onChange={(e) => {
          setCareer(e.target.value);
        }}
      />
      <datalist id="career-data-list">
        {careers.map((career) => (
          <option value={career}></option>
        ))}
      </datalist>

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
