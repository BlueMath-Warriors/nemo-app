import { chart as chartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const Graph = ({ data1, label1, data2, label2, stepActive, graphTextData }) => {
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (value === 0 || value === 0.0) {
            value = "";
            return value;
          }
          let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = ((value * 100) / sum).toFixed(0) + "%";

          return percentage;
        },
        color: "white",
        font: {
          weight: "bold",
        },
      },

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
        <p className="w-[33%] h-[380px] rounded pt-1 xl:pt-0 pl-6 pr-6 text-white mr-2 text-[14px] min-[1280px]:text-base min-[1400px]:text-base text-justify flex items-center">
          {graphTextData[stepActive]}
        </p>
        <div className="w-[33%] h-[380px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black mr-4 drop-shadow-xl">
          <h2 className="text-white text-xl font-semibold my-1 text-center">
            {label1}
          </h2>
          <Pie data={data1} options={options} />
        </div>
        <div className="w-[33%] h-[380px] rounded-lg bg-nemo-dark-graph mt-4 p-6 flex flex-col justify-center items-center text-black drop-shadow-xl">
          <h2 className="text-white text-xl font-semibold my-1 text-center">
            {label2}
          </h2>
          <Pie data={data2} options={options} />
        </div>
      </div>
    </>
  );
};

export default Graph;
