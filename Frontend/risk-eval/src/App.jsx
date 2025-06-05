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
      <div className="p-4">
        <h4>RiskEval</h4>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/dashboard" className="px-4 py-2">
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/explorer" className="px-4 py-2">
                  Explorer
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="mt-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explorer" element={<Explorer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
