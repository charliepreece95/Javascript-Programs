//const variables
const input = 'Thats smoken hot';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
//for loop to find vowels and push to the resultsArray
for(let i = 0; i < input.length; i++) {
  for(let v = 0; v < vowels.length; v++) {
    if(input[i] === vowels[v]) {
       resultArray.push(input[i]);
    }
  }
  //if these letters are found push them again
  if(input[i] === 'a' || input[i] === 'e')
    {
      resultArray.push(input[i]);
    }
};
//convert array to a string
const join = resultArray.join(' ').toUpperCase();
console.log(join);
