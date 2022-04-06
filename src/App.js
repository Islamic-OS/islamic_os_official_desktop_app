import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
