import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./Forms";
import ResultPage from "./ResultPage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/result-page" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Forms/> */}
    </div>
  );
}

export default App;




