// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Generare un numero random da 1 a 6 per il PC

const pcRandom = Math.floor(Math.random() *6) +1;
console.log ("Il numero è", pcRandom);




// Generare un numero random da 1 a 6 per l'utente

const utenteRandom = Math.floor(Math.random() *6) +1;
console.log ("Il numero è", utenteRandom);

// SE utenteRandom > pcRandom mi stampi hai vinto
if (utenteRandom > pcRandom){
    console.log ("Hai vinto");
    // SE utenteRandom < pcRandom mi stampi hai perso
}else if (utenteRandom < pcRandom){
    console.log("Hai perso")
    // Altrimenti Pareggio
}else{
    console.log("Pareggio")
}
   