import React from "react"

import { Radar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TooltipModel,
  TooltipItem,
} from "chart.js/auto"

import { GraphContainer } from "./style"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
)

interface GraphProps {
  color: string
  stats: number[]
}

const Graph = ({ color, stats }: GraphProps) => {
  const scaling = [255, 180, 230, 180, 230, 160]

  const colors = {
    "--g-type-white": "#F0F0F0",
    "--g-type-gray": "#A0A0A0",
    "--g-type-yellow": "#F0D048",
    "--g-type-brown": "#B07030",
    "--g-type-green": "#40B868",
    "--g-type-blue": "#3088F0",
    "--g-type-purple": "#A868C0",
    "--g-type-pink": "#F890C8",
    "--g-type-red": "#F05868",
    "--g-type-black": "#2c2c2c",
  }

  const RadarData = {
    labels: [
      "HP",
      "Attack",
      "Defense",
      "Special Attack",
      "Special Defense",
      "Speed",
    ],
    datasets: [
      {
        backgroundColor: `${colors[color as keyof typeof colors]}7a`,
        borderColor: colors[color as keyof typeof colors],
        pointBackgroundColor: "#fff",
        poingBorderColor: "#fff",
        pointRadius: 5,
        data: stats.map((e, i) => (e * 100) / scaling[i]),
      },
    ],
  }

  const RadarOptions = {
    scales: {
      r: {
        min: 0,
        max: 100,
        backgroundColor: "rgb(100, 100, 100)",
        color: "red",
        grid: {
          circular: true,
          lineWidth: 2,
          color: "rgba(180, 180, 180, .5)",
        },
        angleLines: {
          color: "rgba(180, 180, 180, .5)",
          lineWidth: 2,
        },
        ticks: {
          stepSize: 20,
          display: false,
          beginAtZero: true,
        },
        pointLabels: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        padding: 20,
        callbacks: {
          label: function (
            this: TooltipModel<"radar">,
            tooltipItem: TooltipItem<"radar">
          ) {
            const e = Math.round(
              (Number(tooltipItem.formattedValue) *
                scaling[Number(tooltipItem.dataIndex.toString())]) /
                100
            )
            return e.toString()
          },
        },
      },
    },
  }

  return (
    <GraphContainer>
      <Radar data={RadarData} options={RadarOptions} />
    </GraphContainer>
  )
}

export default Graph
