
Math.PI = Math.PI+1
// console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


const myobj = {name:'saiu', age:24}
console.log(Object.getOwnPropertyDescriptor(myobj, 'name'));

Object.defineProperty(myobj, 'name', {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(myobj, 'name'));

