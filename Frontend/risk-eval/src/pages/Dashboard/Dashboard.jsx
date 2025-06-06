import { ChartAreaInteractive } from "@/components/dashboard/ChartArea";
import { ChartPieInteractive } from "@/components/dashboard/ChartPieDonutInteractive";
import { ChartPieDonutText } from "@/components/dashboard/ChartPieDonutText";
import { ChartRadialLabel } from "@/components/dashboard/ChartRadial";
import { TableDemo } from "@/components/dashboard/Table";
import { ShieldAlert, ShieldCheck, Shield, ChartArea } from "lucide-react";

const stats = [
  {
    icon: <ShieldAlert className="h-12 w-12 text-red-500" />,
    count: 10,
    label: "High Vulnerabilities",
  },
  {
    icon: <Shield className="h-12 w-12 text-yellow-500" />,
    count: 20,
    label: "Medium Vulnerabilities",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-green-500" />,
    count: 30,
    label: "Low Vulnerabilities",
  },
];

export default function DashboardCards() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center"
          >
            <div className="mr-4">{stat.icon}</div>

            <div>
              <div className="text-2xl font-bold">{stat.count}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
        <ChartPieDonutText />
        <ChartPieInteractive />
        <ChartRadialLabel />
      </div>

      <div className="mt-4">
        <ChartAreaInteractive />
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-4">
        <TableDemo />
      </div>
    </div>
  );
}
