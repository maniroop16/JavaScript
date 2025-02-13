// function userdetails(username, age){
//     this.username = username
//     this.age = age

//     this.greetings = function(){
//         console.log(`welcome, ${this.username}`)
//     }

//     return this // Even if we do not return 'this' it will by default return objects
// }

// const obj1 = new userdetails('mani', 20)
// const obj2 = new userdetails('saI', 18)

// // console.log(obj1);
// console.log(obj2.greetings());
// obj2.greetings()


function multiply(num){
    return num*5
}

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply(5).prototype);

