import React from "react";

const IndianPlayers = () => {
  const indianPlayers = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja"
  ];

  const oddTeamPlayers = indianPlayers.filter(
    (_, index) => index % 2 === 0
  );

  const evenTeamPlayers = indianPlayers.filter(
    (_, index) => index % 2 !== 0
  );

  const t20Players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Suryakumar Yadav"
  ];

  const ranjiTrophyPlayers = [
    "Cheteshwar Pujara",
    "Ajinkya Rahane",
    "Yashasvi Jaiswal"
  ];

  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Odd Team Players</h2>

      <ul>
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>

      <ul>
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players</h2>

      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;