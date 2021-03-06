import React from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

const RatingGraph = (props) => {
  // console.log('rating graph', props.data);
  return (
      <BarChart data={props.data} 
        margin={{top: 20, bottom: 5}}
        barCategoryGap={50}
        barGap={1}
        width={600}
        height={300}  
      >
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="averageDrinkRating" fill="#82ca9d" />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
  );
};

export default RatingGraph;