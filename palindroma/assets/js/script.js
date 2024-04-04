// // INPUT
// const wordUser = prompt("Inserisci una parola");
// let wordStart = "";
// let wordEnd = "";
// // ESECUZIONE LOGICA

// //ciclo per parola da inizio a fine
// let i;
// for (i = 0; i < wordUser.length; i++) {
//     wordStart += wordUser[i];
// }
// console.log(wordStart);
// //ciclo per parola da fine a inizio
// let j;
// for (let j = wordUser.length - 1; j >= 0; j--) {
//     // console.log(wordUser[j]);
//     wordEnd += wordUser[j];
// }
// console.log(wordEnd);

// // OUTPUT
// if(wordStart === wordEnd){
//     console.log("Parola palindroma");
// }else{
//     console.log("Parola non palindroma");
// }


// INPUT
const wordUser = prompt("Inserisci una parola");
let wordStart = "";
let wordEnd = "";
// ESECUZIONE LOGICA

//ciclo per parola da inizio a fine
let i;
alignWordStart();
console.log(wordStart);

//ciclo per parola da fine a inizio
let j;
alignWordEnd();
console.log(wordEnd);


// OUTPUT

function giveResult() {
    if(wordStart === wordEnd){
        console.log("Parola palindroma");
    }else{
        console.log("Parola non palindroma");
    }
}

const result = giveResult();



