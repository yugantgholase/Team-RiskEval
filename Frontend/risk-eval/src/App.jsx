import { Link, useLocation, Routes, Route, useNavigate } from "react-router";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router";
import { NavigationMenu } from "./components/ui/navigation-menu";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Explorer from "@/pages/Explorer/Explorer";
import ProjectHeader from "@/pages/ProjectHeader";
import { Toaster } from "sonner";
import { ShieldCheck } from "lucide-react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div
        className="flex flex-row items-center bg-white"
        style={{ borderBottom: "4px solid #ececec" }}
      >
        <div
          className="text-4xl flex flex-row font-bold p-3"
          // onClick={navigate("/dashboard")}
        >
          <ShieldCheck size={40} className="mr-1 mt-1" />
          <h1 style={{ color: "red" }}>Risk</h1>
          <h1>Eval</h1>
        </div>

        <NavigationMenu>
          <Link
            to="/dashboard"
            className={`px-4 py-2 text-xl font-bold ${
              isActive("/dashboard") ? "border-b-1 border-red-500 " : ""
            }`}
          >
            Dashboard
          </Link>
        </NavigationMenu>
        <NavigationMenu>
          <Link
            to="/explorer"
            className={`px-4 py-2 text-xl font-bold ${
              isActive("/explorer") ? "border-b-1 border-red-500 " : ""
            }`}
          >
            Explorer
          </Link>
        </NavigationMenu>
      </div>

      <div className="m-6 mt-5" style={{ backgroundColor: "#fafafa" }}>
        <ProjectHeader />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explorer" element={<Explorer />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
