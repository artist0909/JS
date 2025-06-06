const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

// ------------------------------------MATH-----------------------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4,3,214,5,6,4));
console.log(Math.max(4,5,7,2,5,34))

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);