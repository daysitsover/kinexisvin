document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myDonutChart").getContext("2d");

  const myDonutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Remaining"],
      datasets: [
        {
          label: "Progress",
          data: [14, 17],
          backgroundColor: ["#A49ED7", "#e0e0e0"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      cutout: "70%",
    },
  });
});
