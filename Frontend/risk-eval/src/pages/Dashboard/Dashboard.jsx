import { ChartAreaInteractive } from "@/components/dashboard/ChartArea";
import { ChartPieInteractive } from "@/components/dashboard/ChartPieDonutInteractive";
import { ChartPieDonutText } from "@/components/dashboard/ChartPieDonutText";
import { ChartRadialLabel } from "@/components/dashboard/ChartRadial";
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import SeveritySummary from "@/components/dashboard/SeveritySummary";

export default function DashboardCards() {
  return (
    <div className="bg-gray-100 p-2">
      <SeveritySummary />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
        <ChartPieDonutText />
        <ChartPieInteractive />
        <ChartRadialLabel />
      </div>

      <div className="mt-2">
        <ChartAreaInteractive />
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-2">
        <DataTableDemo />
      </div>
    </div>
  );
}
