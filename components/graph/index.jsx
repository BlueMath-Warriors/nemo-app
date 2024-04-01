import { chart as chartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const Graph = ({ data1, label1, data2, label2 }) => {
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <p className="w-[33%] h-[360px] rounded mt-4 p-6 text-white mr-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum.
        </p>
        <div className="w-[33%] h-[360px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black mr-4 drop-shadow-xl">
          <h2 className="text-white">{label1}</h2>
          <Pie data={data1} options={options} />
        </div>
        <div className="w-[33%] h-[360px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black drop-shadow-xl">
          <h2 className="text-white">{label2}</h2>
          <Pie data={data2} options={options} />
        </div>
      </div>
    </>
  );
};

export default Graph;
