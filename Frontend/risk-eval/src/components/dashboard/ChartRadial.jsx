"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getFilesCount } from "@/hooks/dashboard.hooks";

export const description = "A radial chart with a label";
const filesCount = getFilesCount();
const chartData = Object.entries(filesCount)?.map(([language, count]) => ({
  language,
  count,
  fill: `var(--color-${language})`,
}));

const chartConfig = {};
Object.entries(filesCount)?.map(([language], index) => {
  chartConfig[language] = {
    label: language,
    color: `var(--chart-${index + 1})`,
  };
});

export function ChartRadialLabel() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>Supported Languages</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={40}
            outerRadius={140}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="language" />}
            />
            <RadialBar dataKey="count" background>
              <LabelList
                position="insideStart"
                dataKey="language"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing data of supported languages
        </div>
      </CardFooter>
    </Card>
  );
}
