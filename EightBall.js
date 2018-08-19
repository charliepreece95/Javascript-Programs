//enter your name
const userName = 'Joe Bloggs';
userName ? console.log(`Hello ${userName}`) : console.log('Hello User'); 
//ask question
const userQuestion = "asks a question:";
console.log(`${userName} ${userQuestion} What are the chances of a solar eclipse this year?`);
//random generator
const randomNumber = Math.floor(Math.random() * 6);
let eightBall = "";
    switch(randomNumber) {
  case 0:
    eightBall = 'no chance';
    break;
  case 1: 
    eightBall = 'unlikely';
    break;
  case 2: 
    eightBall = 'maybe';
    break;
  case 3: 
    eightBall = 'possibly';
    break;
  case 4: 
    eightBall = 'most definitely';
    break;
  case 5: 
    eightBall = 'certain';
    break;
}
console.log(`The eight ball answered: ${eightBall}`);





