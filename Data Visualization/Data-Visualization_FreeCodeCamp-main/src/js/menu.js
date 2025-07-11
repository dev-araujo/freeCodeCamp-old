const chartTypeSelect = document.getElementById("chart-type");
const barChart = document.getElementById("bar-chart");
const scatterPlot = document.getElementById("scatter-plot");

barChart.style.display = "block";

chartTypeSelect.addEventListener("change", () => {
  const selectedChart = chartTypeSelect.value;

  barChart.style.display = selectedChart === "bar" ? "block" : "none";
  scatterPlot.style.display = selectedChart === "scatter" ? "block" : "none";
});
