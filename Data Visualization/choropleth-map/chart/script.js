document.addEventListener("DOMContentLoaded", function () {
  //DATA
  const educationUrl =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
  const countiesUrl =
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

  const width = 960;
  const height = 600;

  //  SVG
  const svg = d3.select("#chart").attr("width", width).attr("height", height);

  // MAP
  const path = d3.geoPath();

  const tooltip = d3.select("#tooltip");

  Promise.all([d3.json(countiesUrl), d3.json(educationUrl)]).then((data) => {
    const [us, education] = data;

    // MAPA
    const educationData = new Map(education.map((d) => [d.fips, d]));

    const color = d3
      .scaleQuantize()
      .domain([
        d3.min(education, (d) => d.bachelorsOrHigher),
        d3.max(education, (d) => d.bachelorsOrHigher),
      ])
      .range(d3.schemeBlues[9]);

    svg
      .append("g")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("data-fips", (d) => d.id)
      .attr("data-education", (d) => educationData.get(d.id).bachelorsOrHigher)
      .attr("fill", (d) => color(educationData.get(d.id).bachelorsOrHigher))
      .attr("d", path)
      .on("mouseover", (event, d) => {
        const data = educationData.get(d.id);
        tooltip.transition().style("visibility", "visible");
        tooltip
          .html(
            `
              <strong>${data.area_name}, ${data.state}</strong><br>
              ${data.bachelorsOrHigher}% with a bachelor's degree or higher
            `
          )
          .attr("data-education", data.bachelorsOrHigher)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`);
      })
      .on("mouseout", () => tooltip.transition().style("visibility", "hidden"));

    // LEGENDA
    const legend = svg
      .append("g")
      .attr("id", "legend")
      .attr("transform", `translate(600, ${height - 5})`); // Posição ajustada

    const legendColors = d3.schemeBlues[9];
    const legendScale = d3.scaleLinear().domain(color.domain()).range([0, 300]);

    const legendAxis = d3
      .axisBottom(legendScale)
      .tickSize(13)
      .tickValues(color.range().map((d) => color.invertExtent(d)[0]));

    legend
      .selectAll("rect")
      .data(color.range().map((d) => color.invertExtent(d)))
      .enter()
      .append("rect")
      .attr("height", 13)
      .attr("x", (d) => legendScale(d[0]))
      .attr("width", (d) => legendScale(d[1]) - legendScale(d[0]))
      .attr("fill", (d) => color(d[0]));

    legend.call(legendAxis);
  });
});
