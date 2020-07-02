const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers () {
      return this._course.appetizers
  },
  get mains () {
      return this._course.mains
  },
  get desserts () {
      return this._course.desserts
  },
  set desserts (newDessert) {
      if (typeof newDessert === 'string' && newDessert.length > 0) {
        this._courses.desserts = newDessert;
      } else {
        console.log('ERROR: dessert should be a non-empty string')
      }
  },
  set appetizers (newAppetizer) {
    if (typeof newAppetizer === 'string' && newAppetizer.length > 0) {
      this._courses.appetizers = newAppetizer;
     } else {
       console.log('ERROR: appetizer should be a non-empty string')
     }
  },
  set mains (newMain) {
      if (typeof newMain === 'string' && newMain.length > 0) {
        this._courses.mains = newMain;
      } else {
        console.log('ERROR: main should be a non-empty string')
      }
    },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers'); 
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your appetizer is ${appetizer.name}, your main is ${main.name} and your dessert is ${dessert.name} for a total of ${totalPrice} dollars`;  
  }, 
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'cheese sticks', 4.50);
menu.addDishToCourse('appetizers', 'hummus', 5.00);

menu.addDishToCourse('mains', 'steak', 25.00);
menu.addDishToCourse('mains', 'salmon', 20.00);
menu.addDishToCourse('mains', 'ribs', 18.00);

menu.addDishToCourse('desserts', 'cheese cake', 4.50);
menu.addDishToCourse('desserts', 'pana cotta', 5.00);
menu.addDishToCourse('desserts', 'brownie', 3.50);

const meal = menu.generateRandomMeal();
console.log(meal);
