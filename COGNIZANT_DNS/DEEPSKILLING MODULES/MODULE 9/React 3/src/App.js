import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Aashritha"
        School="ABC Public School"
        Total={500}
        Goal={5}
      />
    </div>
  );
}

export default App;