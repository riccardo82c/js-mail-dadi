// // Esercizio 1 - Email

// /* Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo. */
// // array contenente le varie Email
// var mailArray = [
//   "ewaters@aol.com",
//   "jaxweb@outlook.com",
//   "grolschie@live.com",
//   "yxing@yahoo.com",
//   "telbij@att.net",
//   "hermanab@optonline.net",
//   "marioph@verizon.net",
//   "denism@optonline.net",
//   "stecoop@live.com",
//   "aegreene@verizon.net",
//   "isaacson@me.com",
//   "dwendlan@optonline.net",
//   "sacraver@att.net",
//   "nelson@verizon.net",
//   "hakim@mac.com",
//   "ianbuck@yahoo.com",
//   "fallorn@outlook.com",
//   "kawasaki@me.com",
//   "burns@msn.com",
//   "prova@gmail.com",
// ];
// // prendo da prompt una mail inserita da utente
// var mailMia = prompt("Per accedere inserisci la tua E-mail...");
// // setto colore a red
// var colore = "red";
// // ciclo l'array se trovo una mail corrispondente a quella inserita
// // setto colore a green (se non la trovo resterà colore = "red")
// for (var i = 0; i < mailArray.length; i++) {
//   if (mailArray[i] == mailMia) {
//     var colore = "green";
//     // for serve per ciclare indi meglio non uscire
//     // i = mailArray.length;
//   }
// }
// // stampa a video risultato (come cambio colore del bkg di un div)
// document.getElementById("risultato").style.background = colore;
// *******************************************************************
// Esercizio 2 - Dadi
/* Generare un numero random da 1  a 6, sia per il giocatore
sia per il computer. Stabilire il vincitore, in base a chi
fa il punteggio più alto. */
/* genero random number da 1 a 6 per il dado Utente*/
var dieUser =
  Math.floor(Math.random() * 6) + 1 + (Math.floor(Math.random() * 6) + 1);
document.getElementById(
  "dieUser"
).innerHTML = `L'utente tirando ha fatto ${dieUser}`;
/* genero random number da 1 a 6 per il dado Pc*/
var diePc =
  Math.floor(Math.random() * 6) + 1 + (Math.floor(Math.random() * 6) + 1);
document.getElementById("diePc").innerHTML = `Il PC tirando ha fatto ${diePc}`;

var risultato = "Pareggio";

if (dieUser > diePc) {
  risultato = "L'utente vince";
} else if (dieUser < diePc) {
  risultato = "Il PC vince";
}

document.getElementById("risultato").innerHTML = risultato;
