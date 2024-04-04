
function selectOddEven() {
    scelta = prompt("Pari o Dispari?").toLowerCase();
    console.log(scelta, "scelta");
    return scelta
}

function selectNumUser() {
    numUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
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



