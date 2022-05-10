const el = d3.select("body")
    .append("p")
    .classed("bar", true)
    .text("hello world!")
    .style("color", "blue")

console.log(el)