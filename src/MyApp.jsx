import React, { useState } from "react";
import { Card, CardHeader, Text, Icon } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';


const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];

export function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart"){
            setToggleCharts("barChart");
        } else {
            setToggleCharts("lineChart");
        }
    };
    return <div>
            <Card header={
                <CardHeader 
                titleText="Card" 
                interactive 
                onClick={handleHeaderClick}
                avatar={<Icon name={ toggleCharts === "lineChart" ? lineChartIcon : barChartIcon } />}
                />
                } 
                style={{ width: "300px" }}
            >
                <Text style={ spacing.sapUiContentPadding }>
                    This is the area of the Card
                </Text>
                {toggleCharts === "lineChart" ? ( 
                    <LineChart 
                    measures={[{ accessor: "data", label: "Stock Price" }]} 
                    dimensions={[{ accessor: "month" }]} 
                    dataset={dataset}
                />
                ) : (
                    <BarChart 
                    measures={[{ accessor: "data", label: "Stock Price" }]} 
                    dimensions={[{ accessor: "month" }]} 
                    dataset={dataset}
                />
                )}
            </Card>
        </div>;
}