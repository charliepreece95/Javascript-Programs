//parent class
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = true;
      this._rating = [];   
    }
    //get properties
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get rating() {
      return this._rating;
    }
  	//set property
    set isCheckedOut(CheckedOut) {
      this._isCheckedOut = checkedOut;  
    }
   //toggle boolean (true = false)
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    //get average
    getAverageRating() {
      //length of the array
      let rating = this._rating.length;
      //reduce array too one value
      let reduce = this._rating.reduce((sum, rating) => sum + rating, 0);
      let average = Math.floor(reduce / rating);
      return this._rating = average;
    }
  	//add rating method
    addRating(rating) {
      this._rating.push(rating);
    }
  }
  //child class
  class Book extends Media {
    //construct properties and use title from parent class
    constructor(author, title, pages, published) {
      super(title);
      this._author = author;
      this._pages = pages; 
      this._published = published;
    }
    //get properties
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
    get published() {
      return this._published;
    }
  }
  //child class
  class Movie extends Media {
    //construct properties and use title from parent class
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
    //get properties
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get MovieCast() {
      return this._movieCast;
    }
  }
 //child class
 class CD extends Media {
    //construct properties and use title from parent class
    constructor(artist, title, song, releaseDate) {
      super(title);
      this._artist = artist;
      this._song = song;
      this._releaseDate = releaseDate; 
    }
    //get properties
    get artist() {
      return this._artist;
    }
    get releaseDate() {
      return this._releaseDate;
    }
   get song() {
     return this._song;
   }
    //shuffle songs
    shuffle() {
     const length = this._song.length;
      for(let i = 0; i < length; i++) {
     const random  = Math.floor(Math.random() * length);
         return length[random];
      }
    }
  }
  //class doesn't inherit parent class
  class Catalog {
    constructor(){
      this.list = [];
    }
    get mediaList(){
    	return this._mediaList;
    }
    set mediaList(newList){
    	this.list.push(newList);
    }
  }
  //new instance of book
  const historyOfEverything = new Book('Bill Bryson', 'A short history', 344, 1990);
    historyOfEverything.toggleCheckOutStatus();
    historyOfEverything.addRating(1);
    historyOfEverything.addRating(3);
    historyOfEverything.addRating(5);
    historyOfEverything.getAverageRating();
  //new instance of movie
  const speed = new Movie('Jan de bont', 'speed', 115);
    speed.toggleCheckOutStatus();
    speed.addRating(1);
    speed.addRating(3);
    speed.addRating(5);
    speed.getAverageRating();
  //new instance of CD
  const adele = new CD('adele', 'Twenty-one', 'hello', 2013);
    adele.addRating(5);
    adele.addRating(4);
    adele.addRating(4);
    adele.getAverageRating();
    adele.shuffle();
  //list all instances
  const list = new Catalog();
    list.mediaList = historyOfEverything;
    list.mediaList = speed;
    list.mediaList = adele;
    //log to the console
    console.log(list);  