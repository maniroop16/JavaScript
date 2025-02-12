// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('This is promise 1')
//         resolve()
//     }, 1000)
// })

// promise1.then(function(){
//     console.log('this is after resolving');

// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('thie is combining then and promise')
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log('thi is resolve thing')
// })

// Sending data in resolve
// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('this is third promise')
//         resolve({'username':'mani', 'email': 'sai@gmail.com'})
//     }, 1000);
// })

// promisethree.then(function(userdetails){
//     console.log(userdetails.username)
//     console.log(userdetails.email)
//     console.log(userdetails)
// })

// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('this is fourth promise')
//         let error = false
//         if (!error) {
//             resolve({username:'sai', email:'sai@gmail.com'})
//         }else{
//             reject("Something went we=rong!!")
//         }
//     }, 1000)
// })

// promisefour.then((userdetails)=>{
//     console.log(userdetails)
//     return userdetails.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('Finally it is resolved or rejected')
// })

// const promisefive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("promise Five");
//         let error = false
//         if (!error) {
//             resolve({username:'sai', email:'sai@gmail.com'})
//         }else{
//             reject("Something went we=rong!!")
//         }
//     }, 1000)
// })

// async function asyncp5(){
//     try {
//         const response = await promisefive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// asyncp5()

// Fetch method 1(async and await)
// async function getuserdata(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error);
//     }
//     finally{
//         console.log('this is finally block')
//     }
// }
// getuserdata()

// Fetch method 2 (then and catch)
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("This is finally"));
