import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import { router } from "./configs/config";
import Search from "./components/search/Search";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {router.map((path) => (
          <Route
            exact
            key={uuidv4()}
            path={path.path}
            element={
              <Home
                key={path.key}
                newscategory={path.category}
                country={path.country}
              />
            }
          />
        ))}
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
