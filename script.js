window.addEventListener("scroll", function(){

let cards = document.querySelectorAll(".card, .news-card")

cards.forEach(card => {

let position = card.getBoundingClientRect().top
let screenHeight = window.innerHeight

if(position < screenHeight - 50){
card.style.opacity = "1"
card.style.transform = "translateY(0)"
}

})

})
let cart = []

function addToCart(name,price){

cart.push({name,price})
alert(name + " added to cart")

}

function checkout(){

let message = "Order:%0A"

cart.forEach(item=>{
message += item.name + " - K" + item.price + "%0A"
})

window.open("https://wa.me/260XXXXXXXXX?text="+message)

}
