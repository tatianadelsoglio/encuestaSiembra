import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import "./style.css";

const GraficosEncuesta = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="div_contentGraf">
        <div className="grafUno">
          <PieChart
            width={400}
            height={250}
            // style={{ border: "1px solid blue" }}
          >
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="grafDos">
          <PieChart
            width={400}
            height={250}
            // style={{ border: "1px solid blue" }}
          >
            <Pie
              data={data}

              cx={"50%"}
              cy={"50%"}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="grafTres">
          <PieChart
            width={400}
            height={250}
            // style={{ border: "1px solid blue" }}
          >
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default GraficosEncuesta;
