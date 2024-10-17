function theBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, ${this.read} `;
  };
}


const newBook = new theBook("Harry Potter", "J. K. Rowling", "1220", " I like to read it.");
console.log(newBook.bookInfo());

if(Object.getPrototypeOf(newBook) === theBook.prototype){
    console.log("Prototype chain is correct");
}


// if(newBook.__proto__=== theBook.prototype){
//     console.log("Prototype chain is correct");
// }

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');

// Player.prototype.sayHello = function() {
//     console.log("Hello, I'm a player!");
//  };

//  player1.sayHello()

 
// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };
  
//   Object.getPrototypeOf(Player.prototype); 
  
  // Now make `Player` objects inherit from `Person`
//   Object.setPrototypeOf(Player.prototype, Person.prototype);
//   Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
  
//   player1.sayName(); // Hello, I'm steve!
//   player2.sayName(); // Hello, I'm also steve!
  
//   player1.getMarker(); // My marker is 'X'
//   player2.getMarker(); // My marker is 'O'
let x = {};

// console.log(Object.getPrototypeOf(x))
console.log(x.__proto__);
// console.log(Object.getPrototypeOf(x) === Object.prototype) // true

console.log(x.toString())

console.log(x.__proto__.__proto__);

// let y = [];
// console.log(y.__proto__);

let y = new Array();
console.log(y.__proto__);
console.log(y.__proto__.__proto__);

console.log(y.__proto__ === Array.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(Array.prototype.isPrototypeOf(y));
console.log(Object.prototype.isPrototypeOf(Array));

console.log(y instanceof Array);

// let z = new Date();
// console.log(z.__proto__);
// console.log(z.__proto__.__proto__);

// console.log(z.__proto__ === Date.prototype);
// console.log(z.__proto__.__proto__ === Object.prototype);
// console.log(Date.prototype.isPrototypeOf(y));
// console.log(Object.prototype.isPrototypeOf(Date));

// console.log(z instanceof Date);

function Hero(name, level){
    this.name = name;
    this.level = level;
}

let hero1 = new Hero("Zelda", 1)
console.log(hero1);
console.log(hero1.__proto__);

Hero.prototype.greet = function () {
    return `${this.name} says awe china.`;
}

console.log(hero1.greet());
console.log(hero1.__proto__);

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);
  // Add a new property
  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype); // Inherit from Hero
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
    return `${this.name} attacks with ${this.weapon}.`;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
  }
  
  Healer.prototype = Object.create(Hero.prototype); // Inherit from Hero
  Healer.prototype.constructor = Healer;
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  };

  let hero2 = new Warrior("Zelda", 1, "sword");
  let hero3 = new Healer("Fey", 1, "full heal");

console.log(hero2);
console.log(hero3);

console.log(hero2.attack());
console.log(hero3.heal());
console.log(hero2.greet());
console.log(hero3.greet());

