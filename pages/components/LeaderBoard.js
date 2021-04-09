import React from "react";

export default function LeaderBoard({ players, lastScraped }) {
  const participants = getParticipants();

  participants.forEach((participant) => {
    let count = 0;
    participant.players.forEach((player) => {
      player.points = getPoints(players, player.name);
      count += parseFloat(player.points) || 0;
    });
    participant.totalPoints = count;
    participant.players.sort(
      (player1, player2) => player2.points - player1.points
    );
  });

  return (
    <div>
      {participants.map((participant) => (
        <div>
          <div>
            {participant.name} {participant.totalPoints}
          </div>
          {participant.players.map((player) => (
            <div>
              {player.name} {player.points}
            </div>
          ))}
        </div>
      ))}

      <div>
        Actual LeaderBoard
        <div>Last scraped: {lastScraped}</div>
        {players.map((player) => (
          <div>
            {player.name} {player.points}
          </div>
        ))}
      </div>
    </div>
  );
}

function getPoints(players, name) {
  if (!players) {
    return 0;
  }
  const player = players.find((x) => x.name == name);
  return player ? player.points : 0;
}

function getParticipants() {
  return [
    {
      name: "Manohar",
      players: [
        { name: "Chris Morris", points: 0 },
        { name: "Andre Russel", points: 0 },
        { name: "Kieron Pollard", points: 0 },
        { name: "Rohit Sharma", points: 0 },
        { name: "Kedar Jadhav", points: 0 },
        { name: "Ishan Kishan", points: 0 },
        { name: "Glenn Maxwell", points: 0 },
        { name: "T Natarajan", points: 0 },
        { name: "MS Dhoni", points: 0 },
        { name: "Anrich Nortje", points: 0 },
        { name: "Dinesh Karthik", points: 0 },
        { name: "Shivam Dube", points: 0 },
        { name: "Mustafizur Rahman", points: 0 },
        { name: "Ravichandran Ashwin", points: 0 },
        { name: "Shahrukh Khan", points: 0 },
      ],
    },
    {
      name: "Kalyan",
      players: [
        { name: "Suryakumar Yadav", points: 0 },
        { name: "Shakib Al Hasan", points: 0 },
        { name: "Kyle Jaimeson", points: 0 },
        { name: "Nicholas Pooran", points: 0 },
        { name: "David Warner", points: 0 },
        { name: "Varun Chakraborty", points: 0 },
        { name: "Trent Boult", points: 0 },
        { name: "Manish Pandey", points: 0 },
        { name: "Bhuvaneshwar Kumar", points: 0 },
        { name: "Ravi Bishnoi", points: 0 },
        { name: "Nitish Rana", points: 0 },
        { name: "Faf Du Plesis", points: 0 },
      ],
    },
    {
      name: "Kaspa",
      players: [
        { name: "Mayank Agarwal", points: 0 },
        { name: "Devdutt Padikkal", points: 0 },
        { name: "Kagiso Rabada", points: 0 },
        { name: "Jasprit Bumrah", points: 0 },
        { name: "Prithwi Shaw", points: 0 },
        { name: "Shardul Thakur", points: 0 },
        { name: "Jos Buttler", points: 0 },
        { name: "Washington Sundar", points: 0 },
        { name: "Deepak Chahar", points: 0 },
      ],
    },
    {
      name: "Ashish",
      players: [
        { name: "Rashid Khan", points: 0 },
        { name: "Sam Curran", points: 0 },
        { name: "Shikhar Dhawan", points: 0 },
        { name: "Marcus Stoinis", points: 0 },
        { name: "Ravindra Jadeja", points: 0 },
        { name: "Pat Cummins", points: 0 },
        { name: "Virat Kohli", points: 0 },
        { name: "Jason Holder", points: 0 },
        { name: "Shivam Mavi", points: 0 },
        { name: "Mandeep Singh", points: 0 },
      ],
    },
    {
      name: "Chunchu",
      players: [
        { name: "KL Rahul", points: 0 },
        { name: "Quinton De Cock", points: 0 },
        { name: "AB de Villiers", points: 0 },
        { name: "Hardik Pandya", points: 0 },
        { name: "Ruturaj Gaikwad", points: 0 },
        { name: "Rahul Tewatia", points: 0 },
        { name: "Mohammed Shami", points: 0 },
        { name: "Kane Williamson", points: 0 },
        { name: "Eoin Morgan", points: 0 },
        { name: "Yuzvendra Chahal", points: 0 },
        { name: "Rahul Chahar", points: 0 },
        { name: "Ben Stokes", points: 0 },
        { name: "Riley Meredith", points: 0 },
        { name: "Karthik Tyagi", points: 0 },
      ],
    },
    {
      name: "Mahesh",
      players: [
        { name: "Rishabh Pant", points: 0 },
        { name: "Shubman Gill", points: 0 },
        { name: "Jhye Richardson", points: 0 },
        { name: "Krunal Pandya", points: 0 },
        { name: "Steve Smith", points: 0 },
        { name: "Shimron Hetmeyer", points: 0 },
        { name: "Kane Richardson", points: 0 },
        { name: "Moeen Ali", points: 0 },
        { name: "Prasidh Krishna", points: 0 },
        { name: "Johnny Bairstow", points: 0 },
        { name: "Vijay Shankar", points: 0 },
        { name: "Suresh Raina", points: 0 },
        { name: "Sanju Samson", points: 0 },
        { name: "Krishnappa Goutham", points: 0 },
        { name: "Sunil Narine", points: 0 },
      ],
    },
  ];
}
