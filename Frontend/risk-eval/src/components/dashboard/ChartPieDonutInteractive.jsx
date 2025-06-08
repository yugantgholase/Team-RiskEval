"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCveCountDetails } from "@/hooks/dashboard.hooks";

export const description = "An interactive pie chart";
const top5Cveids = Object?.entries(getCveCountDetails())
  ?.sort((a, b) => b[1] - a[1])
  ?.slice(0, 5);
const cveData = top5Cveids?.map(([cve, count]) => ({
  cveid: cve,
  count: count,
  fill: `var(--color-${cve})`,
}));

const chartConfig = {};
top5Cveids?.forEach(([cve], index) => {
  chartConfig[cve] = {
    label: cve,
    color: `var(--chart-${index + 1})`,
  };
});

export function ChartPieInteractive() {
  const id = "pie-interactive";
  const [activeMonth, setActiveMonth] = React.useState(cveData[0]?.cveid);

  const activeIndex = React.useMemo(
    () => cveData?.findIndex((item) => item?.cveid === activeMonth),
    [activeMonth]
  );
  const months = React.useMemo(() => cveData?.map((item) => item?.cveid), []);

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>CVE IDs</CardTitle>
          <CardDescription>Top 5 cve ids found</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2?.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select CVE ID" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months?.map((key) => {
              const config = chartConfig[key];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={cveData}
              dataKey="count"
              nameKey="cveid"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {cveData[activeIndex].count.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Count
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing Count for each CVE ID
        </div>
      </CardFooter>
    </Card>
  );
}
