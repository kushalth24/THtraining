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
const myArray=[];
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
function myCars(){

}
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
let c= array2.at(2);
console.log(c);
let jointArrayString=array1.join("*");
console.log(jointArrayString);
array3.push("nine");
console.log(array3);
let newLengthOf_array3=array3.push("ten");
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
array3[5]="this will create holes";
console.log(array3);

//The concat() method does not change the existing arrays. It always returns a new array.
const concatenatedArray=array1.concat(array2);
console.log(concatenatedArray);

const myArrayNew = ["Emil", "Tobias", "Linus"];
const myChildren = myArrayNew.concat("Peter","Fernandese"); 
console.log(myChildren);

//to index (2-1)-->1 from index 0, to all the array
fruits.copyWithin(2,0);
//copy elements from 0 to (2-1) at position 3
fruits.push("Strawberry", "Guauva");
fruits.copyWithin(2,0,3);
const myArr = [[1,2],[3,4],[5,6]];
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
const citrus = fruits.slice(1,4);
console.log(citrus);

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// Array Search methods
// array.indexOf(element to be found, start-> from which index to start search)
// returns -1 if no such element.
let position = fruits.indexOf("Apple") + 1;
console.log(position);
// array.lastIndexOf(element to be found, start-> from which index to start search) returns last index of element in array
 
console.log(fruits.includes("Apple"));// checks that elements is present or not

//find()- element that satisfies the condition
//findIndex() -  element index in array that satisfies the condition 
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);
//findLast() - last element that satisfies the condition
//findLastIndex() - last element index that satisfies the condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLast(x => x > 40);
console.log(pos);

// sorting 







