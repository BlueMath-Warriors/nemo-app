import { Lato } from "next/font/google";
import Search from "@/components/search";
import Layout from "./layout";
import styles from "./styles.module.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  display: "swap",
});

const StatusTag = ({ variant, text }) => {
  const bgVariant = {
    teal: "bg-teal-500",
    blue: "bg-[#1764bf]",
  };
  return (
    <div
      className={`status-tag cursor-pointer absolute px-6 py-3 z-10 ${bgVariant[variant]} rounded-xl border border-nemo-light top-[-21px] left-[-32px]`}
    >
      <p className="text-lg font-bold text-nemo-light ">{text}</p>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <section
        className={`flex flex-col mx-auto items-center justify-center w-full p-4 lg:p-12 ${lato.className} ${styles.searchSection}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-nemo-light text-center mb-2">
          Introducing Nemo
        </h2>
        <p className="text-xl md:text-3xl text-nemo-light text-center mb-12">Your next-generation job search tool</p>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center px-8">
          <div className="relative flex flex-col justify-center items-center px-6 bg-nemo-blue-light gap-4 w-full md:w-[30%] h-[200px] rounded-lg">
            <StatusTag text={"Live Now"} variant={"teal"} />
            <h2 className="text-2xl md:text-xl lg:text-xl xl:text-2xl font-bold text-nemo-dark text-center">
              Browse our Database
            </h2>
            <Search />
          </div>
          <div className="relative flex justify-center items-center px-6 bg-nemo-blue-light w-full md:w-[30%] h-[200px] text-center rounded-lg">
            <StatusTag text={"Coming Soon"} variant={"blue"} />

            <p className="text-nemo-dark font-bold text-3xl md:text-xl lg:text-2xl xl:text-3xl cursor-pointer">
              Use our Virtual Career Coach
            </p>
          </div>
          <div className="relative flex justify-center items-center px-6 bg-nemo-blue-light w-full md:w-[30%] h-[200px] text-center rounded-lg ">
            <StatusTag text={"Coming Soon"} variant={"blue"} />

            <p className="text-nemo-dark font-bold text-3xl md:text-xl lg:text-2xl xl:text-3xl cursor-pointer">
              Search our Job Board
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
