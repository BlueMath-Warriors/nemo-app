import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Search = ({ isSearchFromMain }) => {
  const router = useRouter();
  const [career, setCareer] = useState("");
  const [careers, setCareers] = useState([
    "COO",
    "CEO",
    "CFO",
    "CPO",
    "CTO",
    "CRO",
  ]);
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

  const handleCareerSearch = () => {
    const targetUrl = `/career-path/${career}`;

    if (router.asPath === targetUrl) {
      router.reload();
      return;
    }

    router.push({
      pathname: "/career-path/[career]",
      query: { career: career },
      as: targetUrl,
    });
  };

  const handleValueChange = () => {
    console.log("");
  };

  return (
    <div
      className="flex items-center justify-center gap-4 text-base leading-7 text-gray-600"
      ref={searchRef}
    >
      <div className="flex relative w-full">
        <input
          type="text"
          list="career-data-list"
          className="h-[30px] md:h-[50px] max-w-[430px] w-full text-xl font-bold md:text-3xl text-nemo-dark px-4 border-2 border-nemo-dark rounded-lg"
          value={career}
          onChange={handleValueChange}
          onClick={() => setShowList(true)}
        />

        <div
          className={`${
            showList ? "flex" : "hidden"
          } flex-col absolute left-0 top-[30px] md:top-[50px] bg-nemo-dark max-w-[430px] w-full text-xl md:text-3xl text-nemo-light px-4 py-2 border border-nemo-light z-20`}
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

      {!isSearchFromMain ? (
        career ? (
          <Image
            src={"/images/right-search-arrow.svg"}
            width={50}
            height={50}
            alt="right-icon"
            className={
              "w-[30px] h-[30px]  md:h-[50px] md:w-[50px] cursor-pointer bg-nemo-dark border-2 border-nemo-dark rounded-lg"
            }
            style={{ transform: "scaleX(-1)", margin: "0" }}
            onClick={handleCareerSearch}
          />
        ) : (
          ""
        )
      ) : (
        <Image
          src={"/images/right-search-arrow.svg"}
          width={50}
          height={50}
          alt="right-icon"
          className={
            "w-[30px] h-[30px]  md:h-[50px] md:w-[50px] cursor-pointer bg-nemo-dark border-2 border-nemo-dark rounded-lg"
          }
          style={{ transform: "scaleX(-1)", margin: "0" }}
          onClick={handleCareerSearch}
        />
      )}
    </div>
  );
};

export default Search;
