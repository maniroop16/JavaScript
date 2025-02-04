a = [1,2,4,5,7,8,9,0,7,6,4,3,2,3,5,5,76,7]

// filter : return array based on condition
// let newarrr = a.filter( (num) => num>5 && num<20)

// newarrr = a.filter( (num) => {
//     return num<5
// })

// Map: modifies the array and return new array
// let newarrr = a.map((num) => num*10)
// // we can do same thing what map is doing, by using foreach also. But we cannot store directly in a variable
// let arr = []
// a.forEach(item => {
//     arr.push(item*20)
// });

// Chaining: using multiple methods on a single array
// let newarr = a
//             .map((num)=> num*10)
//             .filter((num)=> num>50)


// Reduse: this is mused to perform any operation on a array

// const sumval = a.reduce(function (acc, curval){
//     return acc+curval
// },0)

// using arrow function
// const sumval = a.reduce((acc,currval)=> acc+currval, 0)




console.log(sumval);
