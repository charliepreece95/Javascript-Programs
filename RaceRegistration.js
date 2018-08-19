//random generator up to 1000
let raceNumber = Math.floor(Math.random() * 1000);
//change boolean
let early = true;
//change your age
const age = 18;
//age conditions
if(age >= 18 && early) {
  raceNumber += 1000;
}
if(age > 18 && early) {
  console.log(`You will race at 9:30 with the racenumber: ${raceNumber}`);
}
else if(age > 18 && !early) {
  console.log(`You will race at 11:00 with the racenumber: ${raceNumber}`);
}
else if(age < 18 && early) {
  console.log(`You will race at 12:30 with the racenumber ${raceNumber}`);
}
else {
  console.log('Go to the registration desk');
}
