/*
1. chiedere all’utente il cognome
2. inserirlo in un array con altri cognomi
3. stampa la lista ordinata alfabeticamente in console
4. scrivere posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
5. stampare tutto in pagina */

var list = ["Bianchi", "Neri", "Rossi", "Gialli"];

var userName = prompt("inserisci il tuo cognome");
    list.push(userName);
    console.table(list);