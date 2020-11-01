import React, { useEffect, useState } from "react";
import { Chart, Geom, Axis, Legend } from "bizcharts";

import "./css/Plot.css";

import { API, graphqlOperation } from "aws-amplify";
import { getHistoricalDatas as GetHistoricalData } from "../graphql/queries";
import { useStateValue } from "../reducer/StateProvider";

function Plot() {
  const [{ selectedCoin }] = useStateValue();

  const [state, setState] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        //console.log("getting data for plot");
        const coinsData = await API.graphql(
          graphqlOperation(GetHistoricalData, {
            cryptocurrency: selectedCoin,
            limit: 100,
          })
        );
        //console.log("PLOTTTT DATAAAAA:", coinsData.data.getHistoricalDatas);

        coinsData.data.getHistoricalDatas.forEach((element) => {
          element.time = new Date(element.time * 1000);
        });

        setState(coinsData.data.getHistoricalDatas);
      } catch (err) {
        console.log("error fetching plotData...", err);
      }
    }
    getData();
  }, [selectedCoin]);

  const scale = {
    time: {
      type: "timeCat",
      nice: true,

      mask: "YYYY-MM-DD",
    },
  };

  //mask: ;
  return (
    <div className='plot'>
      <Chart height={250} data={state} autoFit scale={scale}>
        <Legend />
        <Axis name='time' />
        <Axis
          name='high'
          label={{
            formatter: (val) => `${val} USD`,
          }}
        />
        <Geom
          type='line'
          position='time*high'
          size={2}
          shape={"smooth"}
          style={{
            stroke: "#F64740",
            lineWidth: 2,
          }}
        />
        <Geom
          type='line'
          position='time*low'
          size={4}
          shape={"smooth"}
          style={{
            stroke: "#477998",
            lineWidth: 2,
          }}
        />
      </Chart>
    </div>
  );
}

export default Plot;
