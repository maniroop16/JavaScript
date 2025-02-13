// USING CLASS=======================================================
// class Details{
//     constructor(username, email, password){
//         this.username = username,
//         this.email = email
//         this.password = password
//     }
//     encryptPwd(){
//         return `changed password is : ${this.password}abcc`
//     }
//     changeusername(){
//         return `changed password is : ${this.username.toUpperCase()}`
//     }
// }

// const user1 = new Details('sai', 'sai@gmail.com', '1234567')

// console.log(user1.encryptPwd());
// console.log(user1.changeusername());

// USING FUNCTION==========================================================
// function Detailsfunc(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// Detailsfunc.prototype.encryptPwd = function(){
//     return `changed password is : ${this.password}abcc`
// }

// Detailsfunc.prototype.changeusername = function(){
//     return `changed password is : ${this.username.toUpperCase()}`
// }

// const user1 = new Detailsfunc('mani', 'mani@gmail.com', '123444567')
// console.log(user1.encryptPwd());
// console.log(user1.changeusername());

// INHERITANCE===============================================
// Parent class
// class User{
//     constructor(username){
//         this.username = username
//     }

//     logme(){
//         console.log(`iam ${this.username}`)
//     }
// }
// // Child class
// class Teacher extends User{
//     constructor(username, age, subject){
//         super(username)
//         this.age = age
//         this.subject = subject
//     }
//     proSubject(){
//         console.log(`I teach ${this.subject}`); 
//     }
// }

// const teacherobj = new Teacher('mani', 23, 'Python')
// const useronj = new User('Sai')
// // console.log(teacherobj);
// // teacherobj.proSubject()
// // teacherobj.logme()

// console.log(useronj);
// // useronj.proSubject() // cannot accessable because its a child function
// useronj.logme()





