import { ChartAreaInteractive } from "@/components/dashboard/ChartArea";
import { ChartPieInteractive } from "@/components/dashboard/ChartPieDonutInteractive";
import { ChartPieDonutText } from "@/components/dashboard/ChartPieDonutText";
import { ChartRadialLabel } from "@/components/dashboard/ChartRadial";
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import SeveritySummary from "@/components/dashboard/SeveritySummary";

export default function DashboardCards() {
  return (
    <div className=" p-2" style={{ backgroundColor: "#fafafa" }}>
      <SeveritySummary />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <ChartPieDonutText />
        <ChartPieInteractive />
        <ChartRadialLabel />
      </div>

      <div className="mt-4">
        <ChartAreaInteractive />
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-4">
        <DataTableDemo />
      </div>
    </div>
  );
}
