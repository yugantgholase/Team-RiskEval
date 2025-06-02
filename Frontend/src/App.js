import ErrorTree from "./components/ErrorTree";

const errorTree = {
  name: "src",
  type: "folder",
  hasError: true,
  children: [
    {
      name: "components",
      type: "folder",
      hasError: true,
      children: [
        {
          name: "Header.jsx",
          type: "file",
          hasError: true,
          errorMessage: "Missing prop 'title'",
        },
      ],
    },
    {
      name: "App.jsx",
      type: "file",
      hasError: false,
    },
  ],
};

function App() {
  return (
    <div className="container mt-4">
      <h3 className="align-items-center justify-content-center">
        Risk Evaluator
      </h3>
      <ErrorTree data={errorTree} />
    </div>
  );
}

export default App;
