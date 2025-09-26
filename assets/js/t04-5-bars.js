const createBarChart = (data) => {
const viewW = 500, viewH = 1600;
const displayW = 500, displayH = 300;
const svg = d3.select(".responsive-svg-container")
.append("svg")
.attr("viewBox", `0 0 ${viewW} ${viewH}`)
.attr("width", displayW)
.attr("height", displayH)
.style("border", "1px solid black");
// X scale (numeric)
const xMax = d3.max(data, d => d.count);
const xScale = d3.scaleLinear()
.domain([0, xMax])
.range([0, viewW*2]);
// Y scale (categorical) — change 'brand' if your category column differs
const yScale = d3.scaleBand()
.domain(data.map(d => d.brand))
.range([0, viewH])
.paddingInner(0.2)
.paddingOuter(0.1);
// //Bars
// svg.selectAll("rect")
// .data(data)
// .join("rect")
// .attr("class", d => `bar bar-${d.count}`)
// .attr("x", 0)
// .attr("y", d => yScale(d.brand))
// .attr("width", d => xScale(d.count))
// .attr("height", yScale.bandwidth())
// .attr("fill", "steelblue");
const labelX = 100;
const labelY = yScale.bandwidth()/2;

const barAndLabel = svg
.selectAll("g")
.data(data)
.join("g")
.attr("transform", d => `translate(0, ${yScale(d.brand)})`);
//Append bars
barAndLabel
.append("rect").attr("class", d => `bar bar-${d.count}`)
.attr("x", labelX)
.attr("y", 0) // Set to 0 since group is already positioned
.attr("width", d => xScale(d.count))
.attr("height", yScale.bandwidth())
.attr("fill", "steelblue");

//Append labels
barAndLabel
.append("text")
.text(d => d.brand) // change if your category column differs
.attr("x", labelX)
.attr("y", labelY) // adjust to center in the band
.attr("text-anchor", "end") // right-align so text ends at x=100
.style("font-family", "sans-serif")
.style("font-size", "80px");
//Append value labels
barAndLabel
.append("text")
.text(d => d.count) // numeric label
.attr("x", d => labelX + xScale(d.count) + 4) // just past bar end
.attr("y", labelY) // adjust as needed
.style("font-family", "sans-serif")
.style("font-size", "80px");
};