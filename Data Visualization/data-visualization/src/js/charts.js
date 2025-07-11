function createBarChart(svg, dataset) {
  const width = 500;
  const height = 340;

  const padding = 60;
  // Escala para o eixo x
  const xScale = d3
    .scaleBand()
    .domain(d3.range(dataset.length)) // Define o domínio como índices do dataset
    .range([padding, width - padding])
    .paddingInner(0.2);

  // Escala para o eixo y
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset) * 2]) // Ajustando o domínio para ser o dobro do máximo do dataset
    .range([height - padding, padding]);

  // Desenha as barras
  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (data, index) => xScale(index)) // Usa a escala do eixo x para posicionar as barras
    .attr("y", (data) => yScale(data)) // Usa a escala do eixo y para posicionar as barras
    .attr("width", xScale.bandwidth()) // Largura das barras
    .attr("height", (data) => height - padding - yScale(data)) // Altura das barras com base no valor do dataset
    .attr("fill", (data) =>
      data > 15 ? "rgba(6, 175, 119, 0.596)" : "rgba(179, 23, 23, 0.534)"
    ) // Cor das barras
    .attr("rx", 5) // Raio dos cantos das barras
    .attr("class", (data) => (data > 15 ? "bar" : "bar-low")) // Classe para estilo das barras
    .append("title")
    .text((data) => "valor: " + data); // Tooltip com o valor dos dados

  // Eixo x
  const xAxis = d3.axisBottom(xScale);
  svg
    .append("g")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);

  // Eixo y
  const yAxis = d3.axisLeft(yScale);
  svg.append("g").attr("transform", "translate(50,0)").call(yAxis);
}

function createScatterPlot(svg, dataset) {
  const w = 500;
  const h = 500;
  const padding = 60;

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1] * 2)]) // altura do eixo y
    .range([h - padding, padding]);

  svg
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", (d) => d[0] / 20)
    .attr("fill", (d, index) => {
      return d[0] / 20 > 15
        ? "rgba(6, 175, 119, 0.596)"
        : "rgba(179, 23, 23, 0.534)";
    })
    .attr("class", (d) => (d[0] / 20 > 15 ? "bar" : "bar-low")); // hover

  svg
    .selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d[0] + "," + d[1])
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]));

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

  svg.append("g").attr("transform", "translate(60,0)").call(yAxis);
}
