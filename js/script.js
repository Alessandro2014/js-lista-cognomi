/*
1. chiedere all’utente il cognome
2. inserirlo in un array con altri cognomi
3. stampa la lista ordinata alfabeticamente in console
4. scrivere posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
5. stampare tutto in pagina */

var printName = document.getElementById("last-name-list");

function myFunction() {
    list.sort();
    list.toLowerCase();
  }


var list = ["Bianchi", "Neri", "Rossi", "Gialli" ];
    list.indexOf(nameList);
var nameList = " ";
var userName = prompt("inserisci il tuo cognome").toLowerCase();
    list.push(userName);
    console.table(list);


var i = 0;
while (i <= list.length) {
    nameList += "<li>" + list[i] + "</li>";
    i++;
}  



  printName.innerHTML = list;

