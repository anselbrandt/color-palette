import React, { useState, useRef, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import * as d3 from "d3";

interface Props {
  palette: any;
}

export const ControlPanel: React.FC<Props> = ({ palette }) => {
  const [localPalette] = useState(palette);
  const svgRef = useRef(null);
  const [viewportWidth, viewportHeight] = [1100, 600];
  const svgWidth = viewportWidth * 0.8;
  const svgHeight = viewportHeight * 0.7;

  useEffect(() => {
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    const chart = () => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("g").remove();
      svg.attr("width", `${svgWidth}px`).attr("height", `${svgHeight}px`);

      xScale.domain([0, 10]);
      yScale.domain([0, 1]);

      const svgContent = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // xAxis
      svgContent
        .append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

      // yAxis
      svgContent
        .append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(yScale));

      //clip
      svgContent
        .append("defs")
        .append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

      const chartContent = svgContent
        .append("g")
        .attr("clip-path", "url(#clip)");

      chartContent.on("contextmenu", (event) => {
        event.preventDefault();
      });
    };
    chart();
  }, [svgHeight, svgWidth]);

  return (
    <Box h="500px" w="900px" bgColor="gray.100" borderRadius="lg" ml={90}>
      <Flex
        direction="column"
        // justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
      >
        <Flex>
          {localPalette.values.map((value: string, index: any) => (
            <Box key={index} bgColor={value} w="90px" h="60px" fontSize="xs" />
          ))}
        </Flex>
        <Box>
          <svg ref={svgRef} overflow="visible">
            <g className="xAxis" />
            <g className="yAxis" />
          </svg>
        </Box>
      </Flex>
    </Box>
  );
};
