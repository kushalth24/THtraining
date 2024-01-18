// Array and its Methods

//------------------------------------------------------------------
//------------------------------------------------------------------
//Array Basics:

// Declaration

// "const" does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.
// An array declared with const must be initialized when it is declared.
// we can even use the array before it is declared:
cars = ["Saab", "Volvo", "BMW"];
var cars;

const cars1 = ["Saab", "Volvo", "BMW"];
// Here cars1[0] is "Saab"
{
  const cars1 = ["Toyota", "Volvo", "BMW"];
  // Here cars1[0] is "Toyota"
}
// Here cars1[0] is "Saab"

//------
var cars2 = ["Saab", "Volvo", "BMW"];
// Here cars2[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars2[0] is "Toyota"
}
// Here cars2[0] is "Toyota"

// re-declaration of const array in same block is not allowed
// const arr=[];
// const arr=[];--> this is not allowed;
// {
//     const arr=[];--> this is allowed
// }
// var array is not allowed to convert to const in same block.
// var array to var array is allowed everywhere.

const array1 = ["one", "two", "three"];
const array2 = new Array("four", "five", "six");
const array3 = [];
array3[0] = "seven";
array3[1] = "eight";
let a = array1[2];
console.log(a);
array2[2] = "siix";
let stringOf_array2 = array2.toString();
console.log(stringOf_array2);
const person = { firstName: "John", lastName: "Doe", age: 46 };

// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
const myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

arraySorted = array1.sort();
console.log(arraySorted);
let array3Length = array3.length;
console.log(array3Length);

// ----------------Loops-----------------------------
// For Loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text1 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text1 += "<li>" + fruits[i] + "</li>";
}
text1 += "</ul>";
console.log(text1);

// For-Each loops
let text = "<ul>";
array1.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
function myCars() {}
console.log(text);

//------------------------------------------------------------
//JavaScript does not support arrays with named indexes.
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

// Create an array with one element:
const points1 = [40];
// Create an array with 40 undefined elements:
const points2 = new Array(40);
console.log(points1);
console.log(points2);
console.log(Array.isArray(points1));
console.log(points1 instanceof Array);
//----------------------------------------------------------
//---------------------------------------------------------

//Array Methods:
let c = array2.at(2);
console.log(c);
let jointArrayString = array1.join("*");
console.log(jointArrayString);
array3.push("nine");
console.log(array3);
let newLengthOf_array3 = array3.push("ten");
console.log(newLengthOf_array3);
array3.pop();
console.log(array3);
array3.pop();
console.log(array3);
array3.pop();
array3.push("ten");
array3.push("eight");
array3.push("nine");
console.log(array3);
array3.shift();
console.log(array3);
array3.unshift("seven");
console.log(array3);
delete array3[2];
console.log(array3);
array3[5] = "this will create holes";
console.log(array3);

//The concat() method does not change the existing arrays. It always returns a new array.
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);

const myArrayNew = ["Emil", "Tobias", "Linus"];
const myChildren = myArrayNew.concat("Peter", "Fernandese");
console.log(myChildren);

//to index (2-1)-->1 from index 0, to all the array
fruits.copyWithin(2, 0);
//copy elements from 0 to (2-1) at position 3
fruits.push("Strawberry", "Guauva");
fruits.copyWithin(2, 0, 3);
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// The splice() method adds new items to an array.
// array.splice(a,b,comma-separated elements);
// a is position where addition take place
// comma separated elements will be inserted at position a.
// after all elements insertion, next b elements will be deleted.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2);
// now we use toSpliced() method instead of splice as it creates new array rather than changing original.
// newArray=originalArray.toSpliced(a,b,comma-separated values);
// The slice() method slices out a piece of an array.
// removes x front elements from array fruits if used as fruits.slice(x);
fruits2.slice(3);
console.log(fruits2);
// this will take two args, first is starting and second is ending.
// from starting to (end-1) index, elements will be remained, everyone else will removed.
const citrus = fruits.slice(1, 4);
console.log(citrus);

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// Array Search methods
// array.indexOf(element to be found, start-> from which index to start search)
// returns -1 if no such element.
let position = fruits.indexOf("Apple") + 1;
console.log(position);
// array.lastIndexOf(element to be found, start-> from which index to start search) returns last index of element in array

console.log(fruits.includes("Apple")); // checks that elements is present or not

//find()- element that satisfies the condition
//findIndex() -  element index in array that satisfies the condition
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction4);

function myFunction4(value, index, array) {
  return value > 18;
}
console.log(first);
//findLast() - last element that satisfies the condition
//findLastIndex() - last element index that satisfies the condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLast((x) => x > 40);
console.log(pos);
//----------------------------------------------------------
// sorting
// .sort() --> this is for not numbers
const arrayToBeSorted = ["apple", "banana", "Banana", "guava", "watermelon"];
arrayToBeSorted.sort();
console.log(arrayToBeSorted);
arrayToBeSorted.reverse(); //self explanatory
arrayToBeSorted.sort().reverse(); // reverse sort
const sortedArray = arrayToBeSorted.toSorted();
console.log(sortedArray);
const reversedArray = sortedArray.toReversed();
console.log(reversedArray);
// for numeric sort
const numberArray = [40, 100, 1, 5, 25, 10];
numberArray.sort(function (a, b) {
  return a - b;
});
console.log(numberArray);
// b-a for reverse sort

// shuffle the array in random order
arrayToBeSorted.sort(function () {
  return 0.5 - Math.random();
});

//Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
//Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

// sorting objects
const cars3 = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
cars3.sort(function (a, b) {
  return a.year - b.year;
});

// Iteration

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction3);

function myFunction3(value) {
  return value * 2;
}
console.log(numbers2);

const arrayToBeFlatmap = [1, 2, 3, 4, 5, 6];
const flatMappedArray = arrayToBeFlatmap.flatMap((x) => x * 2);
console.log(flatMappedArray);

const nonfilteredArray = [45, 4, 9, 16, 25];
const filteredArray = nonfilteredArray.filter(myFunction2);

function myFunction2(value) {
  return value > 18;
}
console.log(filteredArray);

// array.reduce(myfunction, initial value)-> this operates over whole array and gives one value.
// array.every(myfunction)-> this gives true/false based on every elements pass the required condition or not
// array.some(myfunction)-> this gives true/false based on some element/s pass the required condition or not
// Array.from(object)-> returns the array made from the object (string to characters)
// const keys=arrayName.keys(); here keys variable is iterator of array arrayName.
// for(let x of keys){console.log(x);}
// const entry=arrayName.entries() -> gives entries in key-value format
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March"); // safe way to update array elements
console.log(myMonths);
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
//--------------------------------------------------------------------
//JS objects
// objects has properties and methods.. eg. car-> property:color, brand ; method: can start, can run
const individual = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName; // this is keyword
  },
};
const firstNameOfIndividual = individual.firstName; // access property by '.'
const firstNameOfIndividual1 = individual["firstName"]; // access property by '[" "]'
const fullNameOfIndividual = individual.fullName(); // return full name
const fullNameOfIndividual1 = individual.fullName; // return the function definition-> function() { return this.firstName + " " + this.lastName; }
const x = individual;
x.lastName = "Patel";
console.log(individual.lastName);
delete individual.fullName;
// for..in loop
let allAboutIndividual = "";
for (let x in individual) {
  allAboutIndividual += person[x];
}
console.log(allAboutIndividual);

// JavaScript objects inherit the properties of their prototype.
// The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

console.log(individual);
// other methods to print object
// for..in loop
const objectArray = Object.values(individual);
console.log(objectArray);
const stringifiedObject = JSON.stringify(individual); // converts Dates to String
// if individual contains any method, converts it to string before stringify individual.
console.log(stringifiedObject);

// getters and setters
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
person1.lang = "en";
console.log(person1.language);
console.log(person1.fullName);

// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object
// Use string literals "" instead of new String().
// Use number literals 50 instead of new Number().
// Use boolean literals true / false instead of new Boolean().
// Use object literals {} instead of new Object().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().

// The JavaScript prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
//--------------------------------------------------------
//Iterables
//  for(const x of object){
//    //code
//  }

// let iterator2 = myNumbers[Symbol.iterator2]();

// while (true) {
//   const result = iterator2.next();
//   if (result.done) break;
//   // Any Code Here
// }

//Sets and Maps
const letters = new Set(["a","b","c"]);
const myIterator = letters.values();// iterator to iterate over set letters.
// set.keys() set.entries() for accessing keys and entries , typeof , instanceof
// List all entries
let tex = "";
letters.forEach (function(value) {
  tex += value;
})
console.log(tex);

// maps are same as maps in java
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map

// for (const x of fruits.keys()) { //-> fruits.values(), fruits.entries() can be used
//   text += x;
// }

// set.add(value) method used to add values to set
// Functions

// defined by function keyword. can be assigned to a particular variable, in that case we don't need to name the function. They can be used in a expression
// self invoking functions
(function () {
  let x = "Hello!!";  // I will invoke myself
})();

//arguments.length gives number of arguments in function
// arrow functions function --> const x=(a,b)=>{return a*b}, they are not hoisted and can't use this keyword.
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.
// in case of missing arguments
function missing(x=10, y) { //-->x is a default parameter
  if (y === undefined) {
    y = 2;
  }
  console.log(y);
}
missing();
function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
console.log(findMax(1,6,7,4,3,5,));

//person.fullName.call(person1, "Oslo", "Norway");
// this is for object person having fullName key having a function as a value

// call() and apply()
const per = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person111 = {
  firstName: "Mary",
  lastName: "Doe"
}
// This will return "Mary Doe":
per.fullName.apply(person111);

const pers = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person11 = {
  firstName:"John",
  lastName: "Doe"
}
const person22 = {
  firstName:"Mary",
  lastName: "Doe"
}
// This will return "John Doe":
pers.fullName.call(person11);

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

//bind()
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }
// let fullName = person.fullName.bind(member);

//--------------------------------------------------------------------
// Scopes in JS
// local, global, block
var globalVariable = "I'm in global scope";

function myFunction() {
  var localVariable = "I'm in local scope";
  console.log(localVariable);
  // This function can access globalVariable
  console.log(globalVariable);
  var globalVariable = "global changed"; // global variable will change for only this function.
  // console.log(globalVariable);
}

myFunction();
console.log(globalVariable);
// Variables in local scope are typically declared within functions, conditional statements, loops, or other code blocks.
//In local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.
// function checkCondition() {
//   let result = "Before condition";
//   if (true) {
//     let result = "Inside condition"; // Block-scoped variable
//   }
//   console.log(result); // "Before condition" from the outer scope
// }
// function exampleBlockScope() {
//   if (true) {
//     let blockVariable = "I'm block-scoped with 'let'";
//     const constantBlockVar = "I'm block-scoped with 'const'";
//   }
//   console.log(blockVariable); // Error: blockVariable is not defined
//   console.log(constantBlockVar); // Error: constantBlockVar is not defined
// }
// function myFunction() {
//   if (true) {
//     var localVariable = "I'm in block scope";
//     let blockVariable = "I'm also in block scope";
//   }
//   console.log(localVariable); // Accessible
//   console.log(blockVariable); // Error: blockVariable is not defined
// }

// Nested scope
var xx = 10;

function outer() {
  var xx = 20;

  function inner() {
    var xx = 30;
    console.log(xx); // Accesses x from the innermost scope (x = 30)
  }

  inner();
  console.log(xx); // Accesses x from the outer scope (x = 20)
}

outer();
console.log(xx); // Accesses x from the global scope (x = 10)

// When outerFunction is called and assigned to the closure variable, it retains access to outerVariable even after outerFunction has completed.

// This is the essence of a closure: the inner function remembers the scope in which it was created and can access its variables even when the outer function has finished executing.
function outerFunction() {
  var outerVariable = "I'm in outerFunction";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from the outer scope
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // This still has access to outerVariable

//------------------------------------------------------
// hoisting
console.log(asdfasdfas);
var asdfasdfas = "";
//---------------------------------------------------------
// Spread Operator
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5];
arrCombined = [...arrayOne, ...arrayTwo];
console.log(arrCombined);
let arrayThree = [arrCombined, "c", "d"];
console.log(arrayThree);
console.log(Math.min(...arrCombined));
// we can merge objects as well with spread operator

// Rest operator
function func(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
console.log(func(1, 2)); //3
console.log(func(1, 2, 3)); //6
console.log(func(1, 2, 3, 4, 5)); //15

//------------------------------------------------------------
