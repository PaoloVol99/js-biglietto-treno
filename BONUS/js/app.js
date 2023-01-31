// Chiedere numero km
let kilometers = parseInt(prompt("Quanti km vuoi percorrere?"))
console.log(kilometers)
// Calcolare prezzo in base ai km
let pricePerKm = 0.21
let startingPrice = pricePerKm * kilometers
console.log(startingPrice)
// Chiedere età
let age = parseInt(prompt("Quanti anni hai?"))
console.log(age)
// Calcolare sconto in base all'età
let discountUnderage = startingPrice * 0.2
let underagePrice = startingPrice - discountUnderage
let discountOver = startingPrice * 0.4
let overPrice = startingPrice - discountOver
let noDiscountPrice = startingPrice.toFixed(2)
let finalUnderagePrice = underagePrice.toFixed(2)
let finalOverPrice = overPrice.toFixed(2)

if (age < 18) {
    console.log(underagePrice)
    console.log(finalUnderagePrice)
    document.getElementById("price").innerHTML = "€ " + finalUnderagePrice
    document.getElementById("discount").innerHTML = "20%"
    document.getElementById("discount").style.color = "green"
    document.getElementById("startingPrice").style.color = "red"
    document.getElementById("startingPrice").style.textDecoration = "line-through"
} else if (age > 64) {
    console.log(overPrice)
    console.log(finalOverPrice)
    document.getElementById("price").innerHTML = "€ " + finalOverPrice
    document.getElementById("discount").innerHTML = "40%"
    document.getElementById("discount").style.color = "green"
    document.getElementById("startingPrice").style.color = "red"
    document.getElementById("startingPrice").style.textDecoration = "line-through"
} else {
    console.log(noDiscountPrice)
    document.getElementById("price").innerHTML = "€ " + noDiscountPrice
    document.getElementById("discount").innerHTML = "TE LO SCORDI"
    document.getElementById("discount").style.color = "red"
    document.getElementById("startingPrice").style.color = "green"
}
// Chiedere Nome e cognome
let firstName = prompt("Come ti chiami?")
let lastName = prompt("Qual è il tuo cognome?")
console.log(firstName)
console.log(lastName)
// Stampare risultati
document.getElementById("name").innerHTML = firstName + " " + lastName
document.getElementById("startingPrice").innerHTML = "€ " + startingPrice.toFixed(2)
document.getElementById("km").innerHTML = kilometers + " " + "km"
