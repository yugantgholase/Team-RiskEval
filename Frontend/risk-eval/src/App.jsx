import { Link, useLocation, Routes, Route } from "react-router";
import "./App.css";
import { NavigationMenu } from "./components/ui/navigation-menu";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Explorer from "@/pages/Explorer/Explorer";
import ProjectHeader from "@/pages/ProjectHeader";
import { Toaster } from "sonner";
import { ShieldCheck } from "lucide-react";
import Code from "./pages/Code/Code";

function App() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div
        className="flex flex-row items-center bg-white"
        style={{ borderBottom: "4px solid #ececec" }}
      >
        <Link
          to="/dashboard"
          className="text-3xl flex flex-row font-bold p-3 mr-6"
        >
          <ShieldCheck size={30} className="mr-1 mt-1" />
          <h1 style={{ color: "red" }}>Risk</h1>
          <h1>Eval</h1>
        </Link>

        <NavigationMenu>
          <Link
            to="/dashboard"
            className={`px-4 py-2 text-[18px] font-bold ${
              isActive("/dashboard") ? "border-b-1 border-red-500 " : ""
            }`}
          >
            Dashboard
          </Link>
        </NavigationMenu>
        <NavigationMenu>
          <Link
            to="/explorer"
            className={`px-4 py-2 text-[18px] font-bold ${
              isActive("/explorer") ? "border-b-1 border-red-500 " : ""
            }`}
          >
            Explorer
          </Link>
        </NavigationMenu>
        <NavigationMenu>
          <Link
            to="/code"
            className={`px-4 py-2 text-[18px] font-bold ${
              isActive("/code") ? "border-b-1 border-red-500 " : ""
            }`}
          >
            Code
          </Link>
        </NavigationMenu>
      </div>

      <div className="m-6 mt-5" style={{ backgroundColor: "#fafafa" }}>
        <ProjectHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
