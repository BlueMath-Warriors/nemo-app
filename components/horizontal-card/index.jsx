import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";

const HorizontalCard = ({ experience, dark }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      className={`${showDetail && "scale-105"} ${
        styles.card
      } border border-black cursor-pointer experience-cards flex flex-col items-center justify-center w-full max-w-[1200px]`}
    >
      <div
        className={`main-exp-card flex items-center justify-start gap-6 w-full ${
          dark ? "bg-nemo-blue-light" : "bg-nemo-blue-light"
        } px-8 py-3`}
        onClick={() => {
          setShowDetail(!showDetail);
        }}
      >
        <h3 className="text-3xl text-nemo-dark font-bold">
          {experience.Company}
        </h3>
        <Image
          src={
            showDetail
              ? "/images/add-icon-dark.svg"
              : "/images/add-icon-light.svg"
          }
          width={40}
          height={40}
          className={showDetail ? styles.crossImage : styles.addImage}
          alt="add icon"
        />
      </div>
      <div
        className={`${
          showDetail ? "flex" : "hidden"
        } detail-content items-center justify-between gap-6 w-full bg-nemo-light px-8 py-3`}
      >
        <h4 className="text-2xl font-bold text-nemo-dark">{`${experience.Position}, ${experience.Company}`}</h4>
        <h4 className="text-2xl font-bold text-nemo-dark">{`${experience.Start}, ${experience.End}`}</h4>
      </div>
    </div>
  );
};

export default HorizontalCard;
