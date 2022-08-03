import "./CurrencyChart.scss";
import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
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
      .then((json) => setHistory(json.data.slice(-7)));
  }, [props.currencyId]);

  const info = history.map((data) => Math.round(data.priceUsd * 100) / 100);
  const labels = history.map((data) => data.date.slice(0, 10));

  return (
    <div className="chart">
      <Chart pannable>
        <ChartTitle text="Сhart of changes for the last 7 days" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={labels} />
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
