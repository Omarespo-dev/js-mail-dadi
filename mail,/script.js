// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.



// Crea Lista email invitati
const emailList = ["Antonioromano@gmail.com","Luca1999@gmail.com", "Salvatore2000@gmail.com","Davidescalpieri@gmail.com"]

// Inserisci E-mail da parte dell'utente
const insEmail = prompt("Inserisci la tua email");

// Variabile verifica utente
let puoPartecipare = false;


// Ciclo for per la lista degli invitati
for (let i = 0; i < emailList.length; i++) {
    if (emailList[i].toLowerCase() === insEmail.toLowerCase()) {
        puoPartecipare = true;
    }
}

// Esito
if (puoPartecipare) {
    console.log("Accesso consentito, Benvenuto");
} else {
    console.log("Mi dispiace, la tua E-mail non è nella lista.");
}