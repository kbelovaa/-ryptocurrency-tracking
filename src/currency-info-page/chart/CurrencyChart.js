import "./CurrencyChart.scss";
import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { round } from "../../roundingFunctions";
import "hammerjs";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

export default function CurrencyChart(props) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.coincap.io/v2/assets/${props.currencyId}/history?interval=d1`
    )
      .then((responce) => responce.json())
      .then((json) => setHistory(json.data.slice(-25)));
  }, [props.currencyId]);

  const info = history.map((data) => round(data.priceUsd));
  const labels = history.map((data) => data.date.slice(5, 10));

  const screenWidth = window.screen.width;

  return (
    <div className="chart">
      <Chart
        pannable
        style={
          screenWidth <= 900
            ? screenWidth <= 600
              ? { height: 200 }
              : { height: 300 }
            : {}
        }
      >
        <ChartTitle text="Recent change chart" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            categories={screenWidth <= 900 ? [] : labels}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="line"
            tooltip={{ visible: true }}
            data={info}
            color="rgb(255, 238, 141)"
          />
        </ChartSeries>
      </Chart>
    </div>
  );
}
