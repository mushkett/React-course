// import
import { baseData, clean, person } from "./preson";
import { person as prs } from "./preson.js";

var myName = "Dima";
console.log(myName);
// could be reasscigned

var name = "name";
// couldn't be reasscigned

// Arrow functions
const myFnc = (argument) => {
  return argument * 2;
};

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(5)); // 10

// Classes

class Human {
  constructor() {
    this.gender = "male";
  }
  prtGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  constructor(name) {
    super(); // you have to write if class extends another class
    this.name = name;
  }
  gender = "female";
  printName = () => {
    console.log(this.name);
  };
}
const pers = new Person("Max");
pers.printName();
pers.prtGender();

// Spread & Rest Operators
const array = [1, 2, 3, 4];
const newArray = [...array, 5, 6, 7]; // 1, 2, 3, 4, 5, 6, 7

const newObject = {...Person, newProp:5}

// Destructuriong 
[a, b] = ['Hello', 'Max']
console.log(a); // hello
console.log(b); // max

const numbers = [1, 2, 3];
[num1, , num2] = numbers;
console.log(num1, num2) // 1 3

