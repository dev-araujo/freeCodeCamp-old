import * as d3 from "https://cdn.skypack.dev/d3@7.8.4";

const drawGraph = (data, selector) => {
  // const updateGraph = () => {
  d3.select(selector).selectAll("*").remove();

  const width = window.innerWidth * 0.9;
  const height = window.innerHeight * 0.6;
  const padding = 50;
  const barWidth = (width - 2 * padding) / data.length;

  const svg = d3.select(selector).attr("width", width).attr("height", height);

  // Desenhar gráfico

  // Escalas
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([padding, width - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([0, height - 2 * padding]);

  // Tooltip
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("visibility", "hidden");

  // Desenhar barras
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", (d) => (d[1] > 5000 ? "bar bar-green" : "bar bar-red"))
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    .attr("width", barWidth)
    .attr("height", (d) => yScale(d[1]))
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => height - padding - yScale(d[1]))
    .on("mouseover", (d, i) => {
      tooltip.transition().style("visibility", "visible");
      tooltip.html(
        `<h3>GDP</h3>
          <hr>
          <p><b>Date:</b> ${i[0]}</p>
          <p><b>Billions:</b> $${i[1].toFixed(3)}</p>
          `
      );
      tooltip
        .attr("data-date", i[0])
        .style("left", d.pageX + 10 + "px")
        .style("top", d.pageY + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().style("visibility", "hidden");
    });

  // Eixos

  const datesArr = data.map((d) => {
    return new Date(d[0]);
  });

  const xAxisScale = d3
    .scaleTime()
    .domain([d3.min(datesArr), d3.max(datesArr)])
    .range([padding, width - padding]);

  const yAxisScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([height - padding, padding]);

  const xAxis = d3.axisBottom(xAxisScale);
  const yAxis = d3.axisLeft(yAxisScale);

  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);

  // Texto do eixo y
  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -200)
    .attr("y", 70)
    .text("Gross Domestic Product")
    .style("font-size", "0.7rem");
  // };

  // updateGraph();

  // window.addEventListener("resize", updateGraph);
};

async function getData() {
  const api_url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  const response = await fetch(api_url);
  const data = await response.json();

  drawGraph(data.data, "#chart");
}

getData();
