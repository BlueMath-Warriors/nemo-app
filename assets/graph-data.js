export const EduUnderGradGraph = {
  labels: ["Ivy League", "Stanford", "Other Top 20 School", "Other"],
  datasets: [
    {
      label: "Undergrad Institution",
      data: [0.36, 0.19, 0.26, 0.19],
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
  labels: ["Undergrad", "Master's", "PhD", "MBA"],
  datasets: [
    {
      label: "Highest Schooling Level",
      data: [0.45, 0.29, 0.21, 0.05],
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

export const FirstJobFunction = {
  labels: ["Revenue", "Product", "Finance", "Engineering", "Other"],
  datasets: [
    {
      label: "Function",
      data: [0.25, 0.18, 0.54, 0.03],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      tension: 0.2,
      hoverOffset: 4,
    },
  ],
};

export const FirstJobPromotion = {
  labels: ["Yes", "No"],
  datasets: [
    {
      label: "Promotion",
      data: [0.6, 0.4],
      backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
      tension: 0.2,
      hoverOffset: 4,
    },
  ],
};

export const MidCareerPreUnicorn = {
  labels: ["0", "1-3", "4-6", "7+"],
  datasets: [
    {
      label: "# of Jobs Pre-Unicorn",
      data: [0.22, 0.14, 0.6, 0.04],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const MidCareerFunction = {
  labels: ["Revenue", "Product", "Finance", "Engineering", "Other"],
  datasets: [
    {
      label: "Most Common Function",
      data: [0.3, 0.26, 0.21, 0.22, 0.01],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const UnicornRoleCompanyStageAtJoin = {
  labels: ["Co-Founder", "Series A", "Series B/C", "Series D+"],
  datasets: [
    {
      label: "Company Stage At Join",
      data: [0.05, 0.82, 0.01, 0.12],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const UnicornRoleLevelWhenJoining = {
  labels: ["CXO", "VP / Manager", "IC"],
  datasets: [
    {
      label: "Level When Joining",
      data: [0.64, 0.2, 0.16],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      hoverOffset: 4,
    },
  ],
};
