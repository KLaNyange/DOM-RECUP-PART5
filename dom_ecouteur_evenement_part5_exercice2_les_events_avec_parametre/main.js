//*EXO1
let div = document.querySelector("div")
let divTab = Array.from(div.children)
let btn = document.querySelector("input")
console.log(div);

divTab.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element);
    })
});

//* Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

function upper(e) {
    e.target.innerText = e.target.innerText.toUpperCase()
}

div.addEventListener("dblclick", upper)

//*EXO3

let choose = Math.floor(Math.random()*4)
// console.log(choose);
function hasard() {
    switch (choose) {
        case 0:
            div.style.border = "solid gold 1px"
            break;
        case 1:
            div.style.background = "blue"
            break;
        case 2:
            div.style.background = "red"
            break;
        case 3:
            divstyle.border = "dotted gold 5px"
            break;
    }
}
btn.addEventListener("click", hasard)