import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Router>
      <Home data={data} />
    </Router>
  );
}

export default App;
