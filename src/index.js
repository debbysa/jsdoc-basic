// @ts-check

const { add, subtract, divide, multiply } = require("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Debbysa
 * @see <a href= "https://github.com/debbysa"> Github </a>
 */

/**
 * Student name
 * @type {string}
 */
const studentName = "deby";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [90, 93, 97, 95];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: "23",
  text: "semangat deb",
};

/**
 * Calculate Tax
 * @param {number} amount - Total amount
 * @param {number} tax - tax Percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

console.log(calculateTax(100, 0.5));

// jika memakai suatu object
/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - student ID
 * @property {string} name - student name
 * @property {string|number} [age] - student Age (optional)
 * @property {boolean} isActive - student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "Deby",
  age: 22,
  isActive: true,
};

/**
 * class to create a person object
 */

class Person {
  /**
   *
   * @param {Object} personInfo - information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name
     * @property {string} age
     */
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person one
 * See {@link Person}
 */

const person1 = new Person({
  name: "Deby Silvia",
  age: 20,
});

// console.log(person1.greet());

console.log(add(10, 5));
