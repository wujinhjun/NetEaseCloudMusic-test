import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindMusic from "./pages/find-music";
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
