import React from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Shield,
  ChartArea,
  OctagonAlert,
} from "lucide-react";
import SeverityHighIcon from "@/assets/severity-high.svg";
import { getSeverityCount } from "@/hooks/dashboard.hooks";

const severity = getSeverityCount();
const stats = [
  {
    icon: (
      <img
        src={SeverityHighIcon}
        alt="High Priority"
        className="h-12 w-12 mr-4"
      />
    ),
    count: severity?.high,
    label: "High Severity",
  },
  {
    icon: <OctagonAlert className="h-12 w-12 text-yellow-500" />,
    count: severity?.medium,
    label: "Medium Severity",
  },
  {
    icon: <OctagonAlert className="h-12 w-12 text-green-500" />,
    count: severity?.low,
    label: "Low Severity",
  },
];

const SeveritySummary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
  );
};

export default SeveritySummary;
