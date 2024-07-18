//var c = 300  //baki global scope
let a=300
if(true) // block scope
{

let a=10
const b=20
var c=30
//console.log("INNER:" , a);
}

 // for(let i=0;i<array.length;i++ )
 //{
  //  const element = array[i];
//}
//console.log(a);
//console.log(b);
//console.log(c);


function one() {
    const username = "harsh"

    function two()   {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); // iska scope toh 2 ke ander tak hi tha 

   // two()
} // two one ke ander ke variable ko access kr skta hain one nhin

one()

if(true)
{
    const username = "harsh"
    if(username === "harsh")
    {
        const website = "youtube"
      //  console.log(username+website);
    }
   // console.log(website); 
}
//console.log(username);


// ********** INTERESTING ***********

function addone(num){
   return num+1
}

console.log(addone(3));

const addtwo = function(num){
    return num+2
}
 
console.log(addtwo(5));



