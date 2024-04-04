**Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

**Consigli del giorno**
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
3. Utilizzate JS docs per impostare che cosa fa ogni funzione, che cosa prende in ingresso (parametri) e che cosa restituisce.
4. Usate un file js separato per dichiarazioni delle funzioni e includetelo prima del file script.js


# SOLUZIONE PALINDROMA 

### INPUT

- [X] Creare una variabile per la parola inserita
- [X] Creare una variabile per la parola inserita da inizio a fine
- [X] Creare una variabile per la parola inserita da fine a inizio

### ESECUZIONE LOGICA

- [X] Creo un ciclo for con indice 'i' per scorrere la parola che è un array di caratteri dal primo all'ultimo carattere
- [X] Creo un ciclo secondo for con indice 'j' per scorrere la parola dall'ultimo carattere al primo
- [X] Creo un if che metterà a confronto 'wordStart' con 'wordEnd'

### OUTPUT

- [X] Stampare il risultato

```
Se (wordStart === wordEnd){
    stampa palindroma
}Altrimenti{
    stampa non è palindroma
}

```

> //******************************************************************************************//

# SOLUZIONE PARI E DISPARI 


**Pari e Dispari** 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Consigli del giorno**
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
3. Utilizzate JS docs per impostare che cosa fa ogni funzione, che cosa prende in ingresso (parametri) e che cosa restituisce.
4. Usate un file js separato per dichiarazioni delle funzioni e includetelo prima del file script.js

### INPUT

- [X] Dichiarare variabile con scelta pari o dispari
- [X] Dichiarare variabile con numero utente
- [X] Dichiarare variabile per numero casuale

### ESECUZIONE LOGICA

- [X] Fare file aggiuntivo per funzioni
- [X] Funzione per scelta tra pari e dispari
- [X] Funzione per scelta da 1 a 5 da parte dell'utente
- [X] Funzione per generare con Math.random() un numero da  1 a 5 per
- [] Funzione che prende il numero genereato casualmente e il numero dell'utente per sommarli
- [] Nel file script.js eseguo un if per verificare se numero finale è pari o dispari


### OUTPUT

- [] Stampare il risultato
