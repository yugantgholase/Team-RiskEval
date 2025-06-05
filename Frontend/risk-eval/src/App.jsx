import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardDemo } from "./components/LoginCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-900 fs-1">Risk Eval</div>
      <CardDemo />
    </>
  );
}

export default App;
