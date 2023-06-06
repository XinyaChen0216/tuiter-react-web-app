import logo from './logo.svg';
// import './App.css';
import Labs from "./labs";
import A3 from "./labs/a3"
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Navigate } from 'react-router';
import HomeScreen from './tuiter/home-screen';


// import Asd from './labs/a3/question8/Asd';
// import Rew from './labs/a3/question8/Rew';
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
// import Lkj from './labs/a3/question6/Lkj';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
