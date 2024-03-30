import { Inter } from "next/font/google";
import Search from "@/components/search";
import Layout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex flex-col min-h-screen gap-4 items-center justify-center p-4 lg:p-12 ${inter.className}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-nemo text-center">
            So You Want To Be A Unicorn
          </h2>
          <Search />
        </div>
      </main>
    </Layout>
  );
}
