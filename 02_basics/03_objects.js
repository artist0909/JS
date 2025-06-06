//singleton
//Object.create

//Object literals

const mySym = Symbol("ky1")

const JsUser = {
    name : "Devashish",
    age : 21,
    city : "Jamnagar",
    email : "deva@gmail.com",
    isLoggedIn : false,
    lastlogin : ["Mon","Tue"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);