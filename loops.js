// forof forin foreach

// arr = [10,203,30,405,66] // Gives elements in arr
// arr1 = 'maniroop' // Gives character bt character 
// for (const element of arr1) {
//     console.log(element); 
// }


//  Map: This is used to store key value pair of items
// let map = new Map()

// map.set('1', 'sai')
// map.set('2', 'saiiii')
// map.set('3', 'mani')
// map.set('4', 'roop')

// // console.log(map);

// for (const [key,values] of map) {
//     console.log(`key:${key}, value:${values}`);   
// }

// let obj = {
//     name:'mani',
//     age: 25
// }
// let arr = [1,32,3,4,5,6,7,8]
// for (const key in obj) {
//     // console.log(key, obj[key]);   
// }

// for (const key in arr) {
//     console.log(key);   

// }

arr = ['a','b','c','d','e']
arr.forEach(function (item) {
    // console.log(item);
    
});
// Forecah arrow function
arr.forEach(items => {
    // console.log(items);
    
});

arr.forEach((items,index, arr) => {
    console.log(items, index, arr);
    
});


