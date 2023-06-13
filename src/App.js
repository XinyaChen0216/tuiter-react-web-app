import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Navigate to="/labs/a3" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route exact path="/tuiter" element={<Navigate to="/tuiter/home" />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div >
    </HashRouter >
  )
}
export default App;


