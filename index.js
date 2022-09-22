let  randomNumber = Math.round(Math.random() * 10)
let xAtempts = 1

const inputNumber = document.querySelector('#inputNumber')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const text = document.querySelector('.screen2 h2')
let screen1P = document.querySelector('.screen1 p')

let newMessage
let paragraphMessageDefault  = 'Advinhe o número de 0 a 10'


btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', resetGame)


function screenToggle (){ 
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}



function result (){ 
    let inputnumber = inputNumber.value

    if(inputnumber >= 11 || inputnumber == ""  || inputnumber < 0){ 
        alert(`Número inválido, por favor, escreva somente números entre 0 e 10`)
        inputNumber.value = ''
        return
    }



    if(Number(inputnumber) == randomNumber){ 

        screenToggle()

        let message = `Parabéns, você acertou em ${xAtempts} tentativas `
        text.textContent = message
        xAtempts = 0
    }
    screen1P.textContent = `Você tentou o número ${inputNumber.value}, tente novamente`
        

    

    inputNumber.value = ''
    xAtempts++
}

function resetGame(){ 
    screenToggle()
    resetRandom()
    screen1P.textContent = paragraphMessageDefault

}

function resetRandom(){ 
    randomNumber = Math.round(Math.random()*10)
    return randomNumber
}


function handleClick(event){ 
    event.preventDefault()
    result()
}



