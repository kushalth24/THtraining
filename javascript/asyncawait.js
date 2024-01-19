// All [ Async-await, Try-catch, Promises ] 


//callBack functions

function greet(name, callBackFunction) {
  // --> here written as a variable
  console.log("Hi" + name);
  callBackFunction(); // here written as a function
}
function callBackFunction() {
  console.log("Call Back Function");
}
greet("Kushal", callBackFunction); //--> here not written as a function
// array functions like map, find, filter are callback functions

// callback Hell

// setTimeOut()--> Asynchronous Function

console.log("hello");
setTimeout(function () {
  console.log("I am executing after 3 seconds");
}, 3000);

console.log("hello");
console.log("hello");

function getCheese(callBackForCheese) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is the ", cheese);
    callBackForCheese(cheese); // if the callback is not written, function will return undefined.
  }, 2000);
}
function makeDough(cheese, callBackForDough) {
  setTimeout(() => {
    const dough = cheese + "🍩";
    console.log("here is the ", dough);
    callBackForDough(dough);
  }, 2000);
}
function bakePizza(dough, callBackForPizza) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("here is the ", pizza);
    callBackForPizza(pizza);
  }, 2000);
}

getCheese((cheese) => {
  console.log("got the cheese ", cheese);
  makeDough(cheese, (dough) => {
    console.log("got my dough ", dough);
    bakePizza(dough, (pizza) => {
      console.log("got my pizza ", pizza);
    });
  });
});

// this chain of callback is called callback Hell....
// solution is "promises"...

// create a promise
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = true;
  if (isBoarded) {
    resolve("You are in the flight");
  } else {
    reject("Your flight cancelled");
  }
});

// states of Promises.
//               ----- >   fulfilled ( .then())
// (pending)   /
// promise-----
//             \
//               ------>  rejected ( .catch())

//ticket.then((data)=>{}).catch((data)=>{})
ticket
  .then((data) => {
    console.log("wohoo", data);
  })
  .catch((data) => {
    console.log("Oh no", data);
  })
  .finally(() => {
    console.log("I will be always executed");
  });

function getCheese(callBackForCheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      console.log("here is the ", cheese);
      resolve(cheese); // resolve passes only one thing
    }, 2000);
  });
}
// console.log(getCheese); //-> this will return a Promise...

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      console.log("here is the ", cheese);
      resolve(cheese); // resolve passes only one thing
    }, 2000);
  });
}
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      console.log("here is the ", dough);
      resolve(dough); // resolve passes only one thing
    }, 2000);
  });
}
function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      console.log("here is the ", pizza);
      resolve(pizza); // resolve passes only one thing
    }, 2000);
  });
}

getCheese()
  .then((cheese) => {
    console.log("Here is the cheese ", cheese);
    return makeDough(cheese);
  })
  .then((dough) => {
    console.log("Here is the Dough ", dough);
    return bakePizza(dough);
  })
  .then((pizza) => {
    console.log("Here is the pizza ", pizza);
  })
  .catch((data) => {
    console.log("error occurred ", data);
  })
  .finally(() => {
    console.log("Process Ended");
  });

// Async-Await; not let the code to go in next line until it executes.

async function orderPizza() {
  const cheese = await getCheese();
  console.log("here is the ", cheese);
  const dough = await makeDough(cheese);
  console.log("here is the ", dough);
  const pizza = await bakePizza(dough);
  console.log("here is the ", pizza);
}

orderPizza();

// in this orderpizza() function there is a possibility of error( reject() ). so we bound the code by Try-Catch block.

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("here is the ", cheese);
    const dough = await makeDough(cheese);
    console.log("here is the ", dough);
    const pizza = await bakePizza(dough);
    console.log("here is the ", pizza);
  } catch (err) {
    console.log("error occurred: ", err);
  }
}
