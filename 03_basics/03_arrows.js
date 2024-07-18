const user = {
    username : "harsh",
    price : 999,

    welcomeMessage : function(){
      console.log(`${this.username} , welcome to website`); //  this keyword is used for current context

      console.log(this);
    }
}


           // user.welcomeMessage()

            //user.username = "sam"
           // user.welcomeMessage()

//            console.log(this);   // iska output empty ayega kyuki abhi hum global envrionment meh hain

            // isi ko browser meh run krenge toh ayega window oobject kyuki vha pe sabse jyada scope meh window obj hain


// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  // arrow function
    let username = "hitesh"
    console.log(this);  
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2    // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )   // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()