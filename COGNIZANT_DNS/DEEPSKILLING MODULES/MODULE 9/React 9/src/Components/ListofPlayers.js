import React from "react";

const ListofPlayers = () => {
  const players = [
    { id: 1, name: "Virat Kohli", score: 95 },
    { id: 2, name: "Rohit Sharma", score: 82 },
    { id: 3, name: "Shubman Gill", score: 65 },
    { id: 4, name: "KL Rahul", score: 55 },
    { id: 5, name: "Rishabh Pant", score: 72 },
    { id: 6, name: "Hardik Pandya", score: 68 },
    { id: 7, name: "Ravindra Jadeja", score: 77 },
    { id: 8, name: "Ravichandran Ashwin", score: 60 },
    { id: 9, name: "Mohammed Shami", score: 45 },
    { id: 10, name: "Jasprit Bumrah", score: 80 },
    { id: 11, name: "Mohammed Siraj", score: 58 }
  ];

  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: "20px" }}>
      <h2>List of Players</h2>

      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>

      <ul>
        {playersBelow70.map(player => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;