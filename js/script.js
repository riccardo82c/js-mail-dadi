/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

var mailArray = [
  "ewaters@aol.com",
  "jaxweb@outlook.com",
  "grolschie@live.com",
  "yxing@yahoo.com",
  "telbij@att.net",
  "hermanab@optonline.net",
  "marioph@verizon.net",
  "denism@optonline.net",
  "stecoop@live.com",
  "aegreene@verizon.net",
  "isaacson@me.com",
  "dwendlan@optonline.net",
  "sacraver@att.net",
  "nelson@verizon.net",
  "hakim@mac.com",
  "ianbuck@yahoo.com",
  "fallorn@outlook.com",
  "kawasaki@me.com",
  "burns@msn.com",
  "prova@gmail.com",
];

var mailMia = prompt("Per accedere inserisci la tua E-mail...");
// var risultato = false;
var colore = "red";

for (var i = 0; i < mailArray.length; i++) {
  if (mailArray[i] == mailMia) {
    var colore = "green";
    // for serve per ciclare indi meglio non uscire
    // i = mailArray.length;
  }
}

document.getElementById("risultato").style.background = colore;
