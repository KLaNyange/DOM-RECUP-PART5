//* EXO 1
let btn = document.querySelector("input")
let p = document.querySelector("section").firstElementChild

function dunno(x) {
    p.innerText = x
}
btn.addEventListener("click",function(){
    dunno(pContent)
})

//* Pour l'exercice 2
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

function goldy(x, y) {
    h1.style.background = theBackground
    h1.style.color = theColor
}


// function goldy(e) {
//     if (e.target.tagName = "H1") {
//         e.target.style.background = theBackground
//         e.target.style.color = theColor
//     }
// }
h1.addEventListener("click", function(){
    goldy(theBackground, theColor)
})


