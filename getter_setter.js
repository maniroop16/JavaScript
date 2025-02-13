// Usng Class ===================================================
// class GetSet{
//     constructor(username, password){
//         this.username = username
//         this.password= password
//     }

//     set password(value){
//         this._password = value
//     }

//     get password(){
//         return this._password.toLowerCase()
//     }
// }

// const getsetobj = new GetSet('sai', 'ABCCS')
// console.log(getsetobj.password);

// Usng Function ===================================================

function getset(username, password){
    this._username = username
    this._password = password

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
    })
}

const funcobj = new getset('saidfghjk', 'asdfghjkl')
console.log(funcobj.username);
