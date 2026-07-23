import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div>
      <h1>My Academy Dashboard</h1>

      <CohortDetails
        name="React Training"
        coach="John"
        status="ongoing"
        strength={35}
      />

      <CohortDetails
        name="Java Full Stack"
        coach="David"
        status="completed"
        strength={40}
      />

      <CohortDetails
        name="Python"
        coach="Mary"
        status="ongoing"
        strength={30}
      />
    </div>
  );
}

export default App;
