import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import StepBar from "@/components/steps/index";
import Graph from "@/components/graph/index";
import jsonData from "@/assets/data.json";
import PersonProfile from "@/components/person-profile/index";

const CareerPath = () => {
  const router = useRouter();
  const [queryData, setQueryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (router.query.title) {
      setQueryData(router.query.title);
      const filtered = jsonData.filter(
        (entry) => entry.Job.toLowerCase() === router.query.title.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [router.query.title]);

  const handleUserBioRoute = (name) => {
    const encodedName = encodeURIComponent(name);
    router.push(`/bio/${encodedName}`);
  };

  return (
    <Layout>
      <section
        className="pt-[120px] px-8 w-full"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex w-full px-6">
          {/* Left Section */}
          <div className="flex flex-col justify-start left-20 w-[20%]">
            <div className="sticky top-20">
              <h1 className="text-3xl font-semibold leading">
                {`So you want to be a ${queryData.toString().toUpperCase()}?`}
              </h1>
              <p className="text-xl font-normal mt-3 text-gray-200">
                We studied all of their careers so you don't have to.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center w-[80%] px-6">
            <div className="w-[100%]">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-medium text-center">
                  Main Takeaways
                </h3>
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
              <div className="mt-8">
                <h3 className="text-3xl font-medium text-center">
                  Here's how they do it
                </h3>
                <StepBar />
                <Graph />
              </div>
              <div className="flex flex-col mt-8 mb-12">
                <h3 className="text-3xl font-medium mb-6 text-center">
                  Spin through their journeys!
                </h3>
                {/* <ul className="list-disc pl-5 text-gray-300 text-xl"> */}
                <div className="grid grid-cols-6 gap-2">
                  {filteredData.map((data, index) => (
                    <PersonProfile
                      key={index + "_profile"}
                      data={data}
                      handleUserBioRoute={handleUserBioRoute}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPath;
