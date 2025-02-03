// let mysym = Symbol("MSMR");

// let newobj = {
//   name: "mani",
//   age: 24,
//   [mysym]: "MSMRR",
//   email: "sai@gmail.com",
//   isLoggedIn: false,
// };

// console.log(newobj['age']); //Frequently used for fetching
// console.log(newobj.age); //not preferable for fetching
// console.log(newobj[mysym]);

// newobj.greet = function () {
//   console.log(`welcome!! ${this.name}`);
// };

// newobj.greet()

// console.log(console.log("welcon"));
// let obj1 = {a:1,b:2,c:3}
// let obj2 = {d:19,e:29,f:9}

// // Syntax         Object.assign(Target, source) so in below ex: {} is target, obj1,obj2 is source
// const merge_obj = Object.assign({},obj1,obj2)
// // OR
// const spread_merge = {...obj1, ...obj2}
// console.log(spread_merge);

// console.log(Object.keys(merge_obj)) //Array type
// console.log(Object.values(merge_obj)) //Array type
// console.log(Object.entries(merge_obj)) //Array inside an Array 


//  Destructuring 

// let arr = {
//     name: 'sai',
//     age:24,
//     email:'sai@gmail.com'
// }
// const {email} = arr
// const {email: Personalemail} = arr
//  Both above mentioned syntax will work
// console.log(Personalemail)

// Closure

// Arrow functions

// const arrowFunc = () =>{
//   console.log('mani arrow')
// }
// arrowFunc()

// const adding = (num1,num2) => {
//     return num1+num2
// }

// console.log(adding(20,30))

// Implicit return . Good practice to wrap return in brackets
// const adding = (num1,num2) => (num1+num2)
// console.log(adding(20,30))

//IIFE(Immediatly invocked function expression)
// Named IIFE 
// (function print(){
//   console.log('printing something');
// })();

// Arrow IIFE
// ( (name) => {
//   console.log(`printing something ${name}`);
// })('mani');

// Nullis Colascing operator
// This is to check if null or undifined values are there at the time of assigning
// b = 5 ?? 10
// a = null ?? 20
// c = undefined ?? 20
// d = undefined ?? 20 ?? 40

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// // Ternary operator

// a = 50 > 30 ? "yes" : "No"
// console.log(a);




