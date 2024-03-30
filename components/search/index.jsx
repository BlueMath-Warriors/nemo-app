import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Search = () => {
  const [career, setCareer] = useState("");
  const [careers, setCareers] = useState(["COO", "CEO", "CFO"]);
  const [showList, setShowList] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center gap-4 text-base leading-7 text-gray-600"
      ref={searchRef}
    >
      <div className="flex w-full">
        <input
          type="text"
          list="career-data-list"
          className="h-[30px] md:h-[50px] max-w-[430px] w-full text-xl md:text-3xl text-nemo px-4"
          value={career}
          onChange={(e) => {
            setCareer(e.target.value);
          }}
          onClick={() => setShowList(true)}
        />

        <div
          className={`${
            showList ? "flex" : "hidden"
          } flex-col absolute left-0 top-[30px] md:top-[50px] bg-white max-w-[430px] w-4/5 text-xl md:text-3xl text-nemo px-4 py-2`}
        >
          {careers.map((item, index) => (
            <div key={index}>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setCareer(item);
                  setShowList(false);
                }}
              >
                {item}
              </p>
              {index !== careers.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={"/images/right-search-arrow.svg"}
        width={50}
        height={50}
        alt="right-icon"
        className={"w-[30px] h-[30px]  md:h-[50px] md:w-[50px]"}
        style={{ transform: "scaleX(-1)", margin: "0" }}
      />
    </div>
  );
};

export default Search;
