let randomnumber = parseInt(Math.random() * 100 +1)

let sub_button = document.querySelector('#sbt')
let inputvalue = document.querySelector('#guessedvalue')
let remainingattempts = document.querySelector('attempts')
const displaysuccess = document.querySelector('successmsg')

let attempts = 10

let startgame = true

console.log("started")

if (startgame){
    sub_button.addEventListener('click', function(e){
        e.preventDefault();
        const guessednumber = parseInt(inputvalue.value);
        console.log(guessednumber)
        validateNumber(guessednumber)
    })
}

function validateNumber(guessednumber){
    if (guessednumber > 100){
        alert('enter number below 100')
    }
    else if (guessednumber < 1){
        alert('enter number above 1')
    }
    else{
        validatecorrect(guessednumber)
    }
}

function validatecorrect(guessednumber){
    if (guessednumber === randomnumber){
        displaysuccess.computedStyleMap.display = "block"
    }
    else{
        attempts -= 1
        checkattempts()
    }
}

function checkattempts(){
    if (attempts > 10){
        displaysuccess.innerHTML = "You are done with attempts"
        startgame = false
    }
    else{
        remainingattempts.innerHTML = `${attempts}`
    }

}
