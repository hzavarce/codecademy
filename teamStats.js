const team = {
  _players: [
    {
      firstName: 'Mel' ,
      lastName: 'von Hol',
      age: 29
    },
    {
      firstName: 'Harry' ,
      lastName: 'Zav',
      age: 37
    },
    {
      firstName: 'Nio' ,
      lastName: 'Am',
      age: 6
    }
  ],
  _games: [
    {
      opponent: 'Madrid',
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: 'Valencia',
      teamPoints: 2,
      opponentPoints: 1
    },
    {
      opponent: 'Malaga',
      teamPoints: 5,
      opponentPoints: 0
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    return this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    return this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Liverpool', 5, 2);
team.addGame('Arsenal', 3, 2);
team.addGame('Milan', 2, 0);

console.log(team._games);
