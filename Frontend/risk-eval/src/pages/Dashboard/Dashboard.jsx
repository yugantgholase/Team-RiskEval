import { ChartAreaInteractive } from "@/components/dashboard/ChartArea";
import { ChartPieInteractive } from "@/components/dashboard/ChartPieDonutInteractive";
import { ChartPieDonutText } from "@/components/dashboard/ChartPieDonutText";
import { ChartRadialLabel } from "@/components/dashboard/ChartRadial";
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import { ShieldAlert, ShieldCheck, Shield, ChartArea } from "lucide-react";
// import SeverityHighIcon from "@/assets/";

const stats = [
  {
    icon: <ShieldAlert className="h-12 w-12 text-red-500" />,
    count: 10,
    label: "High Severity",
  },
  {
    icon: <Shield className="h-12 w-12 text-yellow-500" />,
    count: 20,
    label: "Medium Severity",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-green-500" />,
    count: 30,
    label: "Low Severity",
  },
];

export default function DashboardCards() {
  return (
    <div className="bg-gray-100 p-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <ChartPieDonutText />
        <ChartPieInteractive />
        <ChartRadialLabel />
      </div>

      <div className="mt-6">
        <ChartAreaInteractive />
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-6">
        <DataTableDemo />
      </div>
    </div>
  );
}
