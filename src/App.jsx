import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindMusic from "./components/FindMusic";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<FindMusic />}></Route>
      </Routes>
      <Fragment>
        <div style={{ height: "1000px" }}></div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
