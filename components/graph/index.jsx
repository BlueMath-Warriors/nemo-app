import { chart as chartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const Graph = () => {
  const data = {
    labels: ["Ivy League", "Stanford", "Other Top 20 School", "Other"],
    datasets: [
      {
        label: "% vs Undergrad Institution",
        data: [0.36, 0.19, 0.26, 0.19],
        fill: true,
        borderColor: "#20A4F3",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        tension: 0.2,
      },
    ],
  };
  const options = {
    responsive: true,
    layout: {
      padding: {},
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        position: "left",
        ticks: {
          // stepSize: 2,
          font: {
            size: 14,
          },
          // padding : 20,
        },
        border: {
          display: false,
        },
      },
    },
  };

  const data2 = {
    labels: ["Undergrad", "Master's", "PhD", "MBA"],
    datasets: [
      {
        label: "% vs Highest Schooling Level",
        data: [0.45, 0.29, 0.21, 0.05],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  return (
    <>
      <div className="mt-8">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto
          est pariatur quis eligendi accusantium maxime, vero quam repellat
          numquam ratione perspiciatis earum ipsam velit praesentium impedit
          natus voluptatum enim eum veniam! Odit, est ex.
        </h2>
        <div className="w-[100%] h-[420px] rounded bg-white mt-4 p-6 flex flex-col justify-center items-center text-black">
          <h2>% vs Undergrad Institution</h2>
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="mt-8">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto
          est pariatur quis eligendi accusantium maxime, vero quam repellat
          numquam ratione perspiciatis earum ipsam velit praesentium impedit
          natus voluptatum enim eum veniam! Odit, est ex.
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-[33%] h-[420px] rounded bg-white mt-4 p-6 flex flex-col justify-start items-center text-black mr-4">
            <h2>% vs Highest Schooling Level</h2>
            <Pie data={data2} />
          </div>
          <div className="w-[33%] h-[420px] rounded bg-white mt-4 p-6 flex flex-col justify-center items-center text-black">
            <h2>% vs Highest Schooling Level</h2>
            <Pie data={data2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
