const marvel_heros = ["thor","iron man","spider man"]
const dc = ["superman","batman","flash"]

// marvel_heros.push(dc)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);


//sprade
// const all_new_heros = [...marvel_heros,...dc]
// console.log(all_new_heros);


// const another_array = [1,2,3,[4,5,6,[7,8,9,10]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("dev"))
console.log(Array.from(("dev")))
console.log(Array({name: "dev"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));