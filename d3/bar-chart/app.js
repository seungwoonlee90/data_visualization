const width = 800;
const height = 800;
let [mt, mr, mb, ml] = [20, 20, 20, 20]
let graphWidth = width - ml - mr
let graphHeight = height - mt - mb

const svg = d3.select(".canvas")
                .append("svg")
                .attr("width", width)
                .attr("height", height)

const graph = svg.append("g")
                    .attr("width", graphWidth)
                    .attr("height", graphHeight)
                    .attr("transform", `translate(${ml}, ${mt})`)

d3.json("./data4.json")
    .then(function(data) {
        [_, ...data] = [...data]
        const x = d3.scaleBand()
                    .domain(data.map(item=>item.지역이름))
                    .range([0, graphWidth])
                    .padding(0.3)
        
        const y = d3.scaleLinear()
                    .domain([0, d3.max(data, d=>d.확진자수)])
                    .range([graphHeight, 0])

        const bars = graph.selectAll("rect")
                            .data(data);

        bars.enter()
            .append("rect")
            .attr("height", d => graphHeight - y(d.확진자수))
            .attr("widht", x.bandwidth)
            .attr("fill", "hotpink")
            .attr("x", d => x(d.지역이름))
            .attr("y", d => y(d.확진자수))
    })
    .catch(function(err){
        console.log(err)
    })