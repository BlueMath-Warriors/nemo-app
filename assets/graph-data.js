export const EduUnderGradGraph = {
  labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
  datasets: [
    {
      label: "Undergrad Institution",
      data: [32, 32, 16, 19],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      tension: 0.2,
      hoverOffset: 4,
    },
  ],
};

export const EduHighSchoolGraph = {
  labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
  datasets: [
    {
      label: "Highest Schooling Level",
      data: [51, 15, 17, 17],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      tension: 0.2,
      hoverOffset: 4,
    },
  ],
};
