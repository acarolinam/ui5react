import React from "react";
import { Card, CardHeader, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

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
    const handleHeaderClick = () => {
        alert("Header clicked");
    };
    return <div>
            <Card header={
                <CardHeader 
                titleText="Card" 
                interactive 
                onClick={handleHeaderClick}
                />
                } 
                style={{ width: "300px" }}
            >
                <Text style={ spacing.sapUiContentPadding }>
                    This is the area of the Card
                </Text>
                <LineChart 
                    measures={[{ accessor: "data", label: "Stock Price" }]} 
                    dimensions={[{ accessor: "month" }]} 
                    dataset={dataset}
                />
                <BarChart 
                    measures={[{ accessor: "data", label: "Stock Price" }]} 
                    dimensions={[{ accessor: "month" }]} 
                    dataset={dataset}
                />
            </Card>
        </div>;
}