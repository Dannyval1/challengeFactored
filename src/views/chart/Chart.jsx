import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Chart = ({ generalSkills }) => {
  const keysSkills = generalSkills && generalSkills.map((e) => e.Skill);
  const valuesSkills = generalSkills && generalSkills.map((e) => e.valueSkill);

  const data = {
    labels: keysSkills,
    datasets: [
      {
        label: "Skill Qualification",
        data: valuesSkills,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
};

export default Chart;
