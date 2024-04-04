// INPUT
// functions.js


// ESECUZIONE LOGICA
const select = selectOddEven();
const result = sumNums();

// OUTPUT
if(result % 2 == 0 && select == "pari"){
    console.log("È pari, corretto!");
}else if (result % 2 == 0 && select == "dispari") {
    console.log("Era pari, mi dispiace! Hai scelto dispari");
}else if (result % 2 !== 0 && select == "pari") {
    console.log("Era dispari, mi dispiace! Hai scelto pari");
}else{
    console.log("È dispari, corretto!");
}
