import React from 'react';
import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray)

    return (
        React.Children.toArray(<div className="chart">
            {props.dataPoints.map(dataPoint => (<ChartBar
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />))}
        </div>));
}

export default Chart;