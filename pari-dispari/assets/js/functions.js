
function selectOddEven() {
    scelta = prompt("Pari o Dispari?").toLowerCase();
    if (scelta !== "pari" && scelta !== "dispari") {
        alert("Inserisci 'pari' o 'dispari'!");
        return selectOddEven();
    } else{
        return scelta;
    }
}

function selectNumUser() {
    let numUser = parseInt(prompt("Inserisci un numero da 1 a 5"));

    while (isNaN(numUser) || numUser === "" && numUser < 1 || numUser > 5) {
        numUser = parseInt(prompt("Inserisci un numero valido da 1 a 5!"));
    }
    console.log(numUser, "user");
    return numUser;
}

function selectNumPc() {
    numPc = Math.floor(Math.random() * 5) + 1;
    console.log(numPc, "pc");
    return numPc;
}

function sumNums() {
    const numUser = selectNumUser();
    const numPc = selectNumPc();
    somma = numUser + numPc;
    console.log(somma);
    return somma;
}



