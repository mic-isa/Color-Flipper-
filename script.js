let body = document.getElementById("body")

let colorName = document.querySelector("span")

let button = document.querySelector("button")

let colors = ["Red","Orange","Green","Violet","White", "Yellow"]

button.addEventListener("click", colorFlipper)

function colorFlipper() {

    let random = Math.floor(Math.random()*6)
    
    body.style.backgroundColor = colors[random];
    
    colorName.innerHTML = colors[random]
}
