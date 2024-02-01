import React, { LegacyRef, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { AndroidSVG, NextjsSVG, ReactSVG, TypescriptSVG } from 'src/assets/svg';

interface Data {
  level: number;
  icon: JSX.Element;
  name: string;
}

const datas: Data[] = [
  {
    level: 5,
    icon: <NextjsSVG color="white" className="w-12 h-12"/>,
    name: "Nestjs",
  },
  {
    level: 7,
    icon: <TypescriptSVG color="white" className="w-12 h-12"/>,
    name: "Typescript",
  },
  {
    level: 8,
    icon: <ReactSVG color="white" className="w-12 h-12"/>,
    name: "React",
  },
  {
    level: 7,
    icon: <TypescriptSVG color="white" className="w-12 h-12"/>,
    name: "Typescript",
  },
  {
    level: 5,
    icon: <AndroidSVG color="white" className="w-12 h-12"/>,
    name: "Android",
  }
]

interface ChartData extends Data {
  x: number;
  y: number;
}

const LineChart = () => {
  const ref = useRef<any>();

  useEffect(() => {
    const data = datas.map((d, i) => ({
      ...d,
      x: i,
      y: 10 - d.level,
    }));

    const svg = d3.select(ref.current as any);

    const xScale = d3.scaleLinear()
      .domain([0, datas.length - 1])
      .range([0, 500]);

    const yScale = d3.scaleLinear()
      .domain([0, 10])
      .range([500, 0]);

    const line = d3.line<ChartData>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 12)
      .attr('d', line);
    // svg아이콘 그리기
  }, []);

  return (
    <svg ref={ref} width={500} height={500}>
      <path />
    </svg>
  );
};

export default LineChart;