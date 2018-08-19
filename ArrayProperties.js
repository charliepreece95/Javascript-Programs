//global scope array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//removes last element
let remove = secretMessage.pop();
//adds elements at the end of the array
let add = secretMessage.push('to','program');

//finds the index of a string
let index = secretMessage.indexOf('easily');
//replaces the index value to a different string
let replace = secretMessage.splice(7, 1, 'right');

//removes the first element
let shift = secretMessage.shift();
//adds an element to the beginning of the array
let unshift = secretMessage.unshift('Programming');

//replaces the indexes of six elements to one element
let splice = secretMessage.splice(6, 5, 'know');
//convert the array into a string
console.log(secretMessage.join(' '));