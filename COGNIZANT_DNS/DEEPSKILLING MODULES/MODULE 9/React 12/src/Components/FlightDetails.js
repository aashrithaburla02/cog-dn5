import React from "react";

function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1">
        <tr>
          <th>Flight</th>
          <th>From</th>
          <th>To</th>
          <th>Price</th>
        </tr>

        <tr>
          <td>AI101</td>
          <td>Hyderabad</td>
          <td>Delhi</td>
          <td>₹5000</td>
        </tr>

        <tr>
          <td>AI202</td>
          <td>Hyderabad</td>
          <td>Mumbai</td>
          <td>₹4000</td>
        </tr>
      </table>
    </div>
  );
}

export default FlightDetails;