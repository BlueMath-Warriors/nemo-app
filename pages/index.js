import { Lato } from "next/font/google";
import Search from "@/components/search";
import Layout from "./layout";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  display: "swap",
});

export default function Home() {
  return (
    <Layout>
      <section
        className={`flex flex-col gap-4 items-center justify-center p-4 lg:p-12 ${lato.className}`}
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-nemo-light text-center">
            So You Want To Be A Unicorn
          </h2>
          <Search />
        </div>
      </section>
    </Layout>
  );
}
