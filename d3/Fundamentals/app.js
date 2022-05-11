const data = [10, 20, 30, 40, 50]
const el = d3.select("ul")
    .selectAll("li")
    .data(data)
    .join(
        enter => {
            return enter.append("li")
                .style("color", "purple")
        }
    )
    .text(d => d);

console.log(el)