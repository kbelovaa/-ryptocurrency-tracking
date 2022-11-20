import React, { useEffect, useState } from 'react';
import { getCurrencyChangesHistory } from 'Services/requests';
import { round } from 'Utils/roundingFunctions';
import 'hammerjs';
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
} from '@progress/kendo-react-charts';
import '@progress/kendo-theme-material/dist/all.css';
import './CurrencyChart.scss';

const CurrencyChart = ({ currencyId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getCurrencyChangesHistory(currencyId)
      .then((response) => response.json())
      .then((json) => setHistory(json.data.slice(-25)));
  }, [currencyId]);

  const info = history.map((data) => round(data.priceUsd));
  const labels = history.map((data) => data.date.slice(5, 10));

  const screenWidth = window.screen.width;

  return (
    <div className="chart">
      <Chart pannable style={screenWidth <= 900 ? (screenWidth <= 600 ? { height: 200 } : { height: 300 }) : {}}>
        <ChartTitle text="Recent change chart" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={screenWidth <= 900 ? [] : labels} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" tooltip={{ visible: true }} data={info} color="rgb(255, 238, 141)" />
        </ChartSeries>
      </Chart>
    </div>
  );
};

export default CurrencyChart;
