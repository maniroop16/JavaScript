let mysym = Symbol("MSMR");

let newobj = {
  name: "mani",
  age: 24,
  [mysym]: "MSMRR",
  email: "sai@gmail.com",
  isLoggedIn: false,
};

// console.log(newobj['age']); //Frequently used for fetching
// console.log(newobj.age); //not preferable for fetching
// console.log(newobj[mysym]);

newobj.greet = function () {
  console.log(`welcome!! ${this.name}`);
};

// newobj.greet()

// console.log(console.log("welcon"));
let obj1 = {a:1,b:2,c:3}
let obj2 = {d:19,e:29,f:9}

// Syntax         Object.assign(Target, source) so in below ex: {} is target, obj1,obj2 is source
const merge_obj = Object.assign({},obj1,obj2)
// OR
const spread_merge = {...obj1, ...obj2}
// console.log(spread_merge);

// console.log(Object.keys(merge_obj)) //Array type
// console.log(Object.values(merge_obj)) //Array type
// console.log(Object.entries(merge_obj)) //Array inside an Array 


//  Destructuring 

let arr = {
    name: 'sai',
    age:24,
    email:'sai@gmail.com'
}
const {email} = arr
const {email: Personalemail} = arr
//  Both above mentioned syntax will work
console.log(Personalemail)