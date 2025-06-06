const name = "devashish"
const repCount = 50

// console.log(name+repCount)

console.log(`hello my name is ${name} and my repository count is ${repCount}`);

const gameName = new String('dev')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const trimString = "   hello    "
console.log(trimString);
console.log(trimString.trim());

const url = "https://devashish%20bhatt"
console.log(url.replace('%20','-'))

console.log(url.includes('bhatt'));