import Header from "./components/Header";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import FindMusic from "./components/FindMusic";
import { Fragment } from "react";
import MyMusic from "./components/MyMusic";
import Friend from "./components/Friend";
import Download from "./components/Download";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<FindMusic />} />
        <Route path="/my" exact element={<MyMusic />} />
        <Route path="/friend" exact element={<Friend />} />
        <Route path="/download" exact element={<Download />} />
      </Routes>
      <Fragment>
        <div style={{ height: "1000px" }}></div>
      </Fragment>
    </HashRouter>
  );
}

export default App;
