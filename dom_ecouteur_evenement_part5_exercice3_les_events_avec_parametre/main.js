//*Exo1

// function destinys(e) {
//     alert(e.target.innerText)
// }

// let ul = document.querySelectorAll("ul")

// ul.forEach(element => {
//     element.addEventListener("click", destinys)
// });

//*Exo2
let modif;

function destinys(e) {
    temp = e.target.innerText
    modif = prompt("Tu veux modifier quelque chose ?")
    if (modif != "") {
        e.target.innerText = modif
    }else{
        e.target.innerText = temp
        alert("Tqt rien n'a changé")
    }
}

let ul = document.querySelectorAll("ul")
Array.from(ul)
console.log(ul);

ul.forEach(element => {
    element.addEventListener("dblclick", destinys)
});


//*Exo3

let li = Array.from(document.querySelector('ul').children)
let input = document.getElementsByTagName('input')[0]
let input1 = document.getElementsByTagName('input')[1]
let btn = document.getElementsByTagName('input')[2]

btn.addEventListener('click', function(){
    let valeur1;
    let valeur2;
    let temp;
    li.forEach(e => {
        if (e.innerText == input.value) {
            valeur1 = e;
        } else if (e.innerText == input1.value) {
            valeur2 = e;
        }
    });
    temp = valeur1.innerText
    valeur1.innerText = valeur2.innerText
    valeur2.innerText = temp
})

