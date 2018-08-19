//change userInput to rock, paper, scissors or bomb
let userInput = 'rock';
userInput = userInput.toLowerCase();
/*-------------------------------------*/
const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  switch(random) {
     case 0: 
     return 'rock';
    break;
     case 1: 
     return 'paper';
    break;
     case 2: 
     return 'scissors';
    break;
    default:
     return 'Invalid';
    break;
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
	  return 'You Automatically Win';
  }
  if(userChoice === computerChoice) {
    return 'Draw';
  }
  if(computerChoice === 'paper') {
    if(userChoice === 'rock') {
    return 'You Lose';
  }
    else {
        return 'You Win';
    }
  }
   if(computerChoice === 'scissors') {
     if(userChoice === 'paper') {
    return 'You Lose';
  }
     else {
       return 'You Win'
    }
  }
  if(computerChoice === 'rock') {
     if(userChoice === 'scissors') {
    return 'You Lose';
  }
     else {
       return 'You Win'
    }
  }
}
function PlayGame() {
  let userChoice = userInput;
  let computerChoice = getComputerChoice();
  console.log(`You have chosen ${userChoice}`);
  console.log(`The computer has chose ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}
PlayGame();