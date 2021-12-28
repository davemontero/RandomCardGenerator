const card = ["A", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
 ,type = ["spades", "hearts", "clubs", "diams"]

const generateRandom = arr => arr[Math.floor(Math.random() * arr.length)]

let cardType   = document.querySelectorAll(".card i")
let cardNumber = document.querySelector(".card span")
let newNumber  = generateRandom(card)
let newType    = generateRandom(type)


window.onload = () => {
    cardNumber.innerHTML = newNumber
    cardType.forEach((card) => { card.className = newType })
}
