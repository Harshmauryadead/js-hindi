function sayMyName() {
console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");

}
//sayMyName()

function addTwoNumbers(number1 , number2)   // numbers here are parameters
{
   console.log( number1+number2);
}
function addTwoNumbers(number1 , number2)   // numbers here are parameters
{
  return number1+number2
}
addTwoNumbers(2,"3")  // here these are arugments

const result= addTwoNumbers(3,5)
console.log("Result:",result);




function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// lec 20


function calculateCartPrice(val1, val2, ...num1){  // ... rest aur spread operator
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


