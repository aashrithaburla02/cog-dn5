import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {

  // State variable to check whether the user is logged in or not
  // false means Guest, true means Logged-in User
  const [loggedIn, setLoggedIn] = useState(false);

  // Element Variable
  // It will store either GuestPage or UserPage
  let page;

  // Conditional Rendering using if-else
  if (loggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Ticket Booking App</h1>

      {/* Conditional Rendering using Ternary Operator */}
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>
          Login
        </button>
      )}

      <hr />

      {/* Display the page stored in the element variable */}
      {page}

    </div>
  );
}

export default App;