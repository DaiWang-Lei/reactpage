import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Dianzan } from "./pages/dianzan";
import { Toubi } from "./pages/toubi";
import { Shoucang } from "./pages/shoucang";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>一键三连 </p>
        <div>
        <Link to="/dianzan">
          <Button size={"large"}>点赞</Button>
        </Link>
        <Link to="/toubi">
          <Button size={"large"}> 投币</Button>
        </Link>
        <Link to="/shoucang">
          <Button size={"large"}>收藏</Button>
        </Link>
        </div>

        <Routes>
          <Route path={"/dianzan"} element={<Dianzan />} />
          <Route path={"/toubi"} element={<Toubi />} />
          <Route path={"/shoucang"} element={<Shoucang />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
