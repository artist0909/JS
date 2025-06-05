//primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const Score = 100
const scoreValue = 100.3

const isLoggedIn = false//boolean
const oustsideTemp = null//nul

let userEail;//undefined

const id = Symbol('123')
const anotherid = Symbol('123')//Symbol

console.log(id === anotherid)

const bigNumber = 134654841354891619n //BigInt



//Reference (Non-primitive)

//Array, Objects, Functions

const heros = ["dev","abhi","manan"]

let Objs = {
     name : "Dev",
     age : 20
}

const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof myFunction);