import React from "react";
import './App.css';
import "./styles/checkbox.scss";
import Faundation from "./components/Faundation";


const App: React.FC = () => {
  return (
    <div className="App">
      <h2>My startup progress</h2>
        <Faundation />
    </div>
  );
}

export default App;
