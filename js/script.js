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
  "prova",
];

var mailMia = prompt("Per accedere inserisci la tua E-mail...");
var risultato = false;

for (var i = 0; i < mailArray.length; i++) {
  if (mailArray[i] == mailMia) {
    var risultato = true;
    i = mailArray.length;
  }
}

console.log(risultato);

if (risultato == true) {
  console.log("ok");
  document.getElementById("risultato").style.background = "green";
} else {
  console.log("no");
  document.getElementById("risultato").style.background = "red";
}
