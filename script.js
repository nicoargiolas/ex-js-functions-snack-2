// // Snack 1
// // Crea una funzione che somma due numeri.
// // Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// // Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// function somma1(n1, n2) {
//     let somma = n1 + n2;
//     return somma;
// }
// console.log(somma1(1, 2));

// const somma2 = function (n1, n2) {
//     sum = n1 + n2;
//     return sum;
// }
// console.log(somma2(1, 2));

// const somma3 = (n1, n2) => {
//     sum = n1 + n2;
//     return sum;
// }
// console.log(somma3(1, 2));


// // Snack 2
// // Crea una arrow function che calcola il quadrato di un numero.
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// const quadrato = (n) => n * n;
// console.log(quadrato(2));


// // Snack 3
// // Crea una funzione eseguiOperazione
// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// const somma = (n1, n2) => n1 + n2;
// const sottrai = (n1, n2) => n1 - n2;
// const moltiplica = (n1, n2) => n1 * n2;
// const dividi = (n1, n2) => n1 / n2;

// const eseguiOperazione = (n1, n2, operazione) => operazione(n1, n2);

// console.log(eseguiOperazione(1, 2, somma));
// console.log(eseguiOperazione(2, 1, sottrai));
// console.log(eseguiOperazione(5, 2, moltiplica));
// console.log(eseguiOperazione(10, 2, dividi));


// // Snack 4
// // Crea un generatore di funzioni creaTimer
// // Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// const creaTimer = (tempo) => {
//     setTimeout(() => {
//         console.log("Tempo scaduto!");
//     }, tempo);
// }

// creaTimer(3000);


// // Snack 5
// // Crea una funzione stampaOgniSecondo con setInterval.
// // Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// // Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// let count = 0;

// const stampaOgniSecondo = (messaggio) => {
//     const intervallo = setInterval(() => {
//         console.log(messaggio);
//         count++;

//         if (count === 5) {
//             clearInterval(intervallo);
//             console.log("Intervallo fermato.");
//         }
//     }, 1000);
// }

// stampaOgniSecondo("è passato un secondo");


// // Snack 6
// // Crea un contatore automatico con setInterval
// // Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// let count2 = 0;

// const creaContatoreAutomatico = (interval) => {
//     const intervallo = setInterval(() => {
//         console.log(count2);
//         count2++;

//         // DEBUG PER NON CONTARE ALL'INFINITO
//         if (count2 === 10) {
//             clearInterval(intervallo);
//             console.log("Intervallo fermato.");
//         }
//     }, interval);
// }

// creaContatoreAutomatico(100);

// // Snack 7
// // Crea una funzione che ferma un timer dopo un certo tempo
// // Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// const eseguiEferma = (messaggio, interval, stop) => {
//     const intervallo = setInterval(() => {
//         console.log(messaggio);
//     }, interval);

//     setTimeout(() => {
//         clearInterval(intervallo);
//         console.log("Intervallo fermato.");
//     }, stop);
// }

// eseguiEferma("ciao", 1000, 10000);


// // Snack 8 (Bonus)
// // Crea una funzione che simula un conto alla rovescia
// // Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// const contoAllaRovescia = (n) => {
//     let count = n;
//     const intervallo = setInterval(() => {
//         console.log(n);
//         n--;

//         if (n === 0) {
//             console.log("Tempo scaduto!");
//             clearInterval(intervallo);
//         }
//     }, 1000);
// }

// contoAllaRovescia(10);


// Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const sequenzaOperazioni = (array, time) => {
    let i = 0;
    const intervallo = setInterval(() => {
        array[i]();
        i++;

        if (i === array.length) {
            clearInterval(intervallo);
        }
    }, time)
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);


