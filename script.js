// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma1(n1, n2) {
    let somma = n1 + n2;
    return somma;
}
console.log(somma1(1, 2));

const somma2 = function (n1, n2) {
    sum = n1 + n2;
    return sum;
}
console.log(somma2(1, 2));

const somma3 = (n1, n2) => {
    sum = n1 + n2;
    return sum;
}
console.log(somma3(1, 2));


// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (n) => n * n;
console.log(quadrato(2));


// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (n1, n2) => n1 + n2;
const sottrai = (n1, n2) => n1 - n2;
const moltiplica = (n1, n2) => n1 * n2;
const dividi = (n1, n2) => n1 / n2;

const eseguiOperazione = (n1, n2, operazione) => operazione(n1, n2);

console.log(eseguiOperazione(1, 2, somma));
console.log(eseguiOperazione(2, 1, sottrai));
console.log(eseguiOperazione(5, 2, moltiplica));
console.log(eseguiOperazione(10, 2, dividi));


// Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (tempo) => {
    setTimeout(() => {
        console.log("Tempo scaduto!");
    }, tempo);
}

creaTimer(3000);


// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

let count = 0;

const stampaOgniSecondo = (messaggio) => {
    const intervallo = setInterval(() => {
        console.log(messaggio);
        count++;

        if (count === 5) {
            clearInterval(intervallo);
            console.log("Intervallo fermato.");
        }
    }, 1000);
}

stampaOgniSecondo("è passato un secondo");


// Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

let count2 = 0;

const creaContatoreAutomatico = (interval) => {
    const intervallo = setInterval(() => {
        console.log(count2);
        count2++;

        // DEBUG PER NON CONTARE ALL'INFINITO
        if (count2 === 10) {
            clearInterval(intervallo);
            console.log("Intervallo fermato.");
        }
    }, interval);
}

creaContatoreAutomatico(100);

