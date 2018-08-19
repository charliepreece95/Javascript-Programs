//Enter the number of hours you sleep each day. 
const getSleepHours = (day) => {
  let hours = day;
  switch(hours) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 6;
      break;
    case 'Wednesday':
      return 7;
      break;
    case 'Thursday':
      return 7;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 5;
      break;
    default:
      return 'Error';
      break;
  }  
};
const getActualSleepHours = () => {
    return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
};
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours  = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
     console.log('You are getting the right amount of sleep');
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log(`You had ${actualSleepHours - idealSleepHours} hour(s) sleep, not enough`);
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log(`You had ${actualSleepHours - idealSleepHours} hour(s) sleep, too much`);
  }
  else {
   return 'Error';
  }
};
console.log('Actual hours slept ' + getActualSleepHours());
console.log('Ideal hours sleep ' + getIdealSleepHours());
calculateSleepDebt();