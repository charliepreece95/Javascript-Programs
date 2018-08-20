//sample text
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
//key words to find/remove
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//split string to line by line
let storyWords = story.split(' ');
//filter out unnecessaryWords words
let filter = storyWords.filter(function(word) {
         return !unnecessaryWords.includes(word);            
});
//set indexes to 0
let really = 0;
let very = 0;
let basically = 0;
//loops through storywords three times
for(let i = 0; i < storyWords.length; i++) {
    if(storyWords[i] === overusedWords[0]) {
       really++;
    }
     else if(storyWords[i] === overusedWords[1]) {
       very++;
    }
    else if(storyWords[i] === overusedWords[2]) {
       basically++;
    }
};
//This is another way of finding words
/*
for(word of storyWords) {
  if(word === 'really') {
     really++;
  }
  else if(word === 'very') {
     very++;
   }
  else if(word === 'basically') {
     basically++;
   }
}
*/
//set indexes to 0
let sentences = 0;
let fullStops = 0;
let exclamationMarks = 0;
//loop to find sentences with a fullStop or exclamation mark.
for(word of storyWords) {
  if(word[word.length - 1] === word) {
     sentences++;
  }
  if(word[word.length - 1] === '.') {
    fullStops++;
  }
  if(word[word.length - 1] === '!') {
    exclamationMarks++;
  }
};
//log everything
const logInfo = (really, very, basically, sentences, fullStops, exclamationMarks) => {
  console.log('Word Count: ' + storyWords.length);
  console.log(`Really total count = ${really}`);
  console.log(`Very total count = ${very}`);
  console.log(`Basically total count = ${basically}`);
  console.log(`Sentences found = ${sentences}`);
  console.log(`Fullstops found = ${fullStops}`);
  console.log(`Exclamation marks found = ${exclamationMarks}`);
  console.log(filter.join(' '));
};
//call the function
logInfo(really, very, basically, sentences, fullStops, exclamationMarks);