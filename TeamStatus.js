//empty objects
const team = {
  _players: [],
  _games: [],
  _scores: [],
  //get players
  get players() {
    return this._players;
  },
  //get games
  get games() {
    return this._games;
  },
  get scores() {
    return this._scores;
  },
  addScores(homeScore, awayScore) {
    let score = {
      homeScore: homeScore,
      awayScore: awayScore
    };
    this.scores.push(score);
  },
  //add player to the object
  addPlayer(firstname, lastname, age, shirtNo) {
    let player = {
      firstname: firstname, 
      lastname: lastname, 
      age: age, 
      shirtNo: shirtNo
    };
    this.players.push(player);   
 },
  //add game to the object
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent, 
      teamPoints: teamPoints, 
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};
//add player
team.addPlayer('Joe', 'Bloggs', 23, 9);
team.addPlayer('John', 'Smith', 50, 10);
team.addPlayer('Ben', 'Jones', 18, 22);
//add game
team.addGame('Inter Milan', 44, 30);
team.addGame('Ac Milan', 44, 50);
team.addGame('Roma', 44, 20);
//add scores
team.addScores(2, 1);
team.addScores(3, 3);
team.addScores(0, 1);
//log to the console
console.log(team.players);
console.log(team.games);
console.log(team.scores);