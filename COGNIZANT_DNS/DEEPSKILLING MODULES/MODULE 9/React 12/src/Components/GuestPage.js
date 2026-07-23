import React from "react";
import FlightDetails from "./FlightDetails";

function GuestPage() {
  return (
    <div>
      <h1>Welcome Guest</h1>

      <p>You can only view flights.</p>

      <FlightDetails />
    </div>
  );
}

export default GuestPage;