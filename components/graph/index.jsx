import { chart as chartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const Graph = ({ data1, label1, data2, label2 }) => {
  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          font: {
            size: 12,
          },
          boxWidth: 12,
        },
        marginTop: 60,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    responsive: true,
  };

  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <p className="w-[33%] h-[360px] rounded pt-1 p-6 text-white mr-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          repellendus explicabo assumenda illo neque qui nam voluptatibus quidem
          ab veniam tenetur eaque, ad excepturi eos est asperiores nemo dolor
          possimus sed sint! Aliquam qui dignissimos cupiditate quaerat fugit
          quis dolorem facere quidem eos cumque, alias odio maxime, harum eum
          vero quos dolore debitis esse! Qui nesciunt, assumenda sed labore
          vitae temporibus? Quaerat magnam provident debitis tempora ullam ab
          nobis soluta deserunt, asperiores et!
        </p>
        <div className="w-[33%] h-[360px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black mr-4 drop-shadow-xl">
          <h2 className="text-white text-xl font-semibold my-1">{label1}</h2>
          <Pie data={data1} options={options} />
        </div>
        <div className="w-[33%] h-[360px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black drop-shadow-xl">
          <h2 className="text-white text-xl font-semibold my-1">{label2}</h2>
          <Pie data={data2} options={options} />
        </div>
      </div>
    </>
  );
};

export default Graph;
