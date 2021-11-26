// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Array invitati
const invited = ['Claudio','Giuseppe','Francesca','Chiara','Elisabetta', 'Thomas','Gianfranco','Mario'];
const container = document.querySelector('.container');
//Avró bisogno di una input text dove inseriró il nome dell'utente
//Il valore della input text andrá salvato in una variabile
//Imposteremo una variabile FIND a false, settata a true indicherá che abbiamo trovato il nome
const find = false;
//CICLO FOR 
for(let i=0;/*finche non scorriamo tutta la lista o/e troviamo il nome*/;i++) {
    //controllo variabile con elemento i-esimo della lista.
    //se i nomi corrispondono setto variabile FIND a true
}
//stampo esito in base a variabile FIND: se true entra, altrimenti no

// //---- BONUS -----
// //l'aggiunta dei click sui bottoni andrá fatta post, per evitare inutili complicazioni
// // CICLO FOR
// const buttonFor = document.querySelector('.btn-for');
// // console.log(buttonFor);
// buttonFor.addEventListener('click',function(){
//     //con un ciclo for controllo se il nome é presente oppure no nella lista e comunico l'esito
// });

// // CICLO WHILE
// const buttonWhile = document.querySelector('.btn-while');
// // console.log(buttonWhile);
// buttonWhile.addEventListener('click', function (){
//     //con un ciclo while controllo se il nome é presente oppure no nella lista e comunico l'esito
// });