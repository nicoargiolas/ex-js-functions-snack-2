// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma1(n1, n2) {
    somma = n1 + n2;
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