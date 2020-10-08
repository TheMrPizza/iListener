import React from "react";
import logo from "./logo.svg";
import HomePage from "./pages/homePage";
import "./App.css";
import { getPosts } from "./services/postsService";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
