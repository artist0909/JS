// const { StrictMode } = require("react")

let score = "dev"

console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"7" -> 7
//"7abc" -> NaN
//true -> 1 false -> 0
let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 -> true 0 -> false
//"" -> false 
//"dev" -> true

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ****************************Operations************************************ */

let value = 3
let negValue = -value

console.log(negValue)

console.log(1+2)
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)//if first string is coming then it ans is 122
console.log(1+2+"2")//if last string is coming them it ans is 32