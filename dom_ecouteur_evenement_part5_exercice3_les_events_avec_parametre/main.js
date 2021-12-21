//*Exo1

// const { Button } = require("bootstrap");

// function destinys(e) {
//     alert(e.target.innerText)
// }

// // let ul = document.querySelectorAll("ul")

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

// let input1 = document.querySelector("#li-one")
// let input2 = document.querySelector("#li-two")
// let btn = document.querySelector("input")[2]
// let input1bis;

// // function nintendo() {
// //     for (let i = 0; i < ul.length; i++) {
// //         if (ul[i].innerText == input1.value) {
// //             input1bis = ul[i].innerText
// //             ul.indexOf(ul[i]) = i
// //             ul[i].innerText = ul[i2].innerText
// //         }else if (ul[i].innerText == input2.value) {
// //             ul.indexOf(ul[i]) = i2
// //             ul[i2].innerText = input1bis
// //         }
        
// //     }
// // }
// let index;
// let index2;

// function nintendo() {
//     for (let i = 0; i < ul.length; i++) {
//         if (ul.children[i].innerText == input1.value) {
            
//             index = i
            
//         }else if (ul.children[i].innerText == input2.value) {
//             index2 = i
            
//         }
        
//     }
// }

// btn.addEventListener("click", nintendo)

// input1bis = ul[index].innerText
// ul.children[index].innerText = ul.children[index2].innerText
// ul.children[index2.innerText] = input1bis
// temp = input1.value
// input1.value = input2.value
// input2.value = temp


let li = Array.from(document.querySelector('ul').children)
let input = document.getElementsByTagName('input')[0]
let input1 = document.getElementsByTagName('input')[1]
let btn = document.getElementsByTagName('input')[2]

function nintendo(params) {
    
}

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

