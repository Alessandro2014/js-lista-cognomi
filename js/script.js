/*
1. chiedere all’utente il cognome
2. inserirlo in un array con altri cognomi
3. stampa la lista ordinata alfabeticamente in console
4. scrivere posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
5. stampare tutto in pagina */

var printName = document.getElementById("last-name-list");

var list = ["Bianchi", "Neri", "Rossi", "Gialli" ];

var userName = prompt("inserisci il tuo cognome");
    list.push(userName);
    list.sort();
    console.table(list);

var nameList = " ";
var i = 0;
while (i < list.length) {
    nameList += "<li>" + list[i] + "</li>";
    i++;
}  

var positionName = (list.indexOf(userName) + 1);
printName.innerHTML = nameList.toLocaleLowerCase() + "Il tuo cognome è nella posizione numero: " + positionName;

