import { useRouter } from "next/router";
import Layout from "../layout";
import StepBar from "@/components/steps/index";
import Graph from "@/components/graph/index";

const CareerPath = () => {
  const router = useRouter();

  const journeys = ["Joe CFO", "Schlomo CFO", "Miguel CFO"];

  return (
    <Layout>
      <section
        className="flex flex-col items-center pt-[80px] px-9 w-full"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-semibold leading">
            So you want to be a COO?
          </h1>
          <p className="text-xl font-normal mt-3 text-center text-gray-200">
            We studied all of their careers so you don't have to.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8 px-11">
          <div className="w-[80%]">
            <h3 className="text-3xl font-medium text-center">
              Here's how they do it
            </h3>
            <StepBar />
            <Graph />
            <div className="flex my-8">
              <div className="w-[70%]">
                <h3 className="text-xl font-medium">Main Takeaways</h3>
                <p className="text-xl font-normal w-[90%] text-gray-200 text-justify mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, adipisci! Provident sunt atque eveniet praesentium
                  perspiciatis dolorum fugit omnis odit. In soluta minima illum
                  ipsam eius est voluptatum accusantium repellendus sed
                  provident, illo voluptate inventore neque debitis perferendis
                  veniam temporibus dignissimos, cum blanditiis explicabo
                  molestias ad sapiente? Corrupti, in incidunt?
                </p>
              </div>
              <div className="w-[30%] ml-6 mt-[34px]">
                <h3 className="text-xl font-medium mb-2">
                  Spin through their journeys!
                </h3>
                <ul className="list-disc pl-5 text-gray-300 text-xl">
                  {journeys.map((data, index) => (
                    <li className="mt-2 ml-4">
                      <a href="#" className="underline">
                        {data}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPath;
