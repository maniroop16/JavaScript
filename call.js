function setusername(username){
    this.username = username
}

function account(username, email, password){

    setusername.call(this, username)
    this.email = email
    this.password = password

}

const acc = new account('sai', 'sai@gmail.com', 12345)

console.log(acc);
