const team = {
  players: [
    {
      firstName: 'kelly',
      lastName: 'arnold',
      age: 60,
        
      firstName: 'jill',
      lastName: 'arnold',
      age: 58,

      firstName: 'jay',
      lastName: 'simonson',
      age: 60,
    },
  ],
  get players() {
    return this._players;
  },
  games: [
    {
   opponent: 'Broncos',
   teamPoints: 43,
   opponentPoints: 27,
    },
  ],
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }
  this.players.push(player),
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  },
  addGame(opp, myPts,oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    }
    this.game.push(game),
  

team.addgame('Jayhawks', 92, 24);
team.addgame('Panthers', 94, 24);
team.addgame('Peacocks', 102, 69);
  }
}
