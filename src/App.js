import React from "react";
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigator from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigator />
      {/* https://velog.io/@dtc03003/A-Route-is-only-ever-to-be-used-as-the-child-of-Routes-element-never-rendered-directly.-Please-wrap-your-Route-in-a-Routes.-%ED%95%B4%EA%B2%B0 */}
        {/* https://velog.io/@whdms3368/React-Error-index.tsx25-Matched-leaf-route-at-location-does-not-have-an-element.-This-means-it-will-render-an-Outlet-with-a-null-value-by-default-resulting-in-an-empty-page.-%ED%95%B4%EA%B2%B0 */}
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  );
}

export default App;