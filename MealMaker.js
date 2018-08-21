//const menu with courses object with empty properties
const menu = {
    _courses: {
       _appetizers: [],
       _mains: [],
       _desserts: [],  
  //get and set the properties    
      set appetizers (appetizer) {
        this._appetizers = appetizer;
      },
      set mains (main) {
        this._mains = main;
      },
      set desserts (dessert) {
        this._desserts = dessert;
      },
      get appetizers () {
        return this._appetizers;
      },
      get mains () {
        return this._mains;
      },
      get desserts () {
        return this._desserts;
      }
    },
    //get all properties
    get courses () {
       return {
         appetizers: this._courses.appetizers,
         mains: this._courses.mains,
         desserts: this._courses.desserts
       }
     }, 
    //add dish to the menu 
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {name: dishName, price: dishPrice};
      this._courses[courseName].push(dish);
    },
    //generate a random dish to be served
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const random = Math.floor(Math.random() * dishes.length);
      return dishes[random];
    },
    //show random dish to the console
      generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and your dessert is ${dessert.name}. The total price is ${totalPrice}.`
    }
  };
  //add dishes to the menu
  menu.addDishToCourse("appetizers", "wings", 6.50);
  menu.addDishToCourse("appetizers", "chips", 3.00);
  menu.addDishToCourse("appetizers", "pretzel", 5.00);
  
  menu.addDishToCourse("mains", "pizza", 12.00);
  menu.addDishToCourse("mains", "burger", 9.00);
  menu.addDishToCourse("mains", "pasta", 12.00);
  
  menu.addDishToCourse("desserts", "pie", 3.00);
  menu.addDishToCourse("desserts", "cake", 3.00);
  menu.addDishToCourse("desserts", "cookie", 2.50);
  //log courses available
  console.log(menu.courses);
  //generate random meal from the courses available
  console.log(menu.generateRandomMeal());