import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explorer from "./pages/Explorer/Explorer";
function App() {
  return (
    <Router>
      <div className="flex flex-row items-center bg-violet-100">
        <div className="">
          <h2 className="text-4xl p-4">RiskEval</h2>
        </div>
        <NavigationMenu>
          <Link to="/dashboard" className="px-4 py-2 text-2xl">
            Dashboard
          </Link>
        </NavigationMenu>
        <NavigationMenu>
          <Link to="/explorer" className="px-4 py-2 text-2xl">
            Explorer
          </Link>
        </NavigationMenu>
      </div>

      <div className="m-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explorer" element={<Explorer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
