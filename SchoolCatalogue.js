//parent class
class School {
    //constructor and properties
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._rating = [];
    }
    //get properties
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    get rating() {
      return this._rating;
    }
    //set property, is number equal to a number?
    set numberOfStudents(noStudents) {
      if(typeof noStudents === 'number') {
        this._numberOfStudents = noStudents;
      }
      else {
        console.log(`Invalid input: ${noStudents}`);
      }   
    }
    //get average
    getAverageScores() {
      //length of the array
      let rating = this._rating.length;
      //reduce array too one value
      let reduce = this._rating.reduce((sum, rating) => sum + rating, 0);
      let average = Math.floor(reduce / rating);
      return this._rating = average;
    }
    //add rating method
    addScore(rating) {
      this._rating.push(rating);
    }
    //concatenate properties into a string 
    quickFacts() {
      let facts = `${this._name} educates ${this._numberOfStudents} students at the ${this._level} level`;
        return facts;
    }
    //random method picks a teacher
    static pickSubstituteTeacher(substituteTeachers) {
      let random = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[random];    
    }
  };
  //child class
  class PrimarySchool extends School {
    //constructor and properties
    constructor(name, numberOfStudents, founded) {
      super(name);
      this.numberOfStudents = numberOfStudents;
      this._level = 'primary';
      this._founded = founded;
    }
    //get property 
    get founded() {
      return this._founded;
    }
  };
  //child class
  class SecondarySchool extends School { 
      //constructor and properties
      constructor(name, numberOfStudents, classes) {
      super(name);
      this.numberOfStudents = numberOfStudents;
      this._level = 'secondary';
      this._classes = classes;
    }
    //get property 
    get classes() {
      return this._classes;
    }
  };
  //child class
  class College extends School {
    //constructor and properties
    constructor(name, numberOfStudents, location) {
      super(name);
      this.numberOfStudents = numberOfStudents;
      this._level = 'college';
      this._location = location;
    }
    //get property 
    get location() {
      return this._location;
    }
  };
  //catalogue class doesn't inherit parent class
  class Catalog {
    //empty constructor
    constructor() {
      this.list = [];
      }
      //get property
      get mediaList(){
          return this._mediaList;
      }
      //set property
      set mediaList(newList){
          this.list.push(newList);
      }
    };
  //new instance of primary school class
  const Oakland = new PrimarySchool('Oakland', 514, 1912);
    //get average rating of the school
    Oakland.addScore(1);
    Oakland.addScore(4);
    Oakland.addScore(5);
    Oakland.getAverageScores();
  //new instance of secondary school class
  //classes returns an object, the array of strings doesn't print for some reason??
  const PriorySchool = new SecondarySchool('Priory School', 625,['English', 'Maths', 'Science']);
    //get average rating of the school
    PriorySchool.addScore(1);
    PriorySchool.addScore(1);
    PriorySchool.addScore(2);
    PriorySchool.getAverageScores();
    console.log()
  //new instance of college class
  const ShrewsburyCollege = new College('Shrewsbury College', 415, 'shrewsbury');
    //get average rating of the school
    ShrewsburyCollege.addScore(5);
    ShrewsburyCollege.addScore(4);
    ShrewsburyCollege.addScore(4);
    ShrewsburyCollege.getAverageScores();
  //list all schools
  const list = new Catalog();
    list.mediaList = Oakland;
    list.mediaList = PriorySchool;
    list.mediaList = ShrewsburyCollege; 
    //log to the console
    console.log(list);
    //create new line
    console.log("\n");
    //log fact using the concatenate method
    console.log(Oakland.quickFacts());
    console.log(PriorySchool.quickFacts());
    console.log(ShrewsburyCollege.quickFacts());
  //create an array of substitute teachers
  const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
    //log to the console
      console.log(`Today's substitute teacher is ${substitute}`);
       //create new line
      console.log("\n");
      //directly logging prints the array
		  console.log(PriorySchool);
		