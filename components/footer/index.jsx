import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer
      className={
        "text-center font-bold py-2 bg-nemo-dark text-nemo-light w-full drop-shadow-md " +
        styles.customShadow
      }
    >
      Powered by NEMO @‌2024
    </footer>
  );
};

export default Footer;
