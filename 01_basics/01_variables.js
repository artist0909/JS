const accountId = 15486
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed

accountEmail = "hdfc@.com"
accountPassword = "2121252"
accountCity = "Jamnager"
let accountState

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

console.log(accountId);


/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/