// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Array invitati
let invited = ['Claudio','Giuseppe','Francesca','Chiara','Elisabetta', 'Thomas','Gianfranco','Mario'];
const container = document.querySelector('.container');
//creo un form
const form = document.createElement('form');
container.append(form);
//INPUTTEXT: dove inseriró il nome dell'utente
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.placeholder = "Inserisci il nome dell'utente";
inputText.size = inputText.placeholder.length;
//SUBMIT: bottone per invio dei dati
const submit = document.createElement('button');
submit.type='submit';
submit.innerHTML = 'Comunica nome';
//inserisco input e bottone appena creati nel mio form
form.append(inputText,submit);
//attendo click per registrare nome e controllare il dato inserito
//per la stampa creo elemento prima
const result = document.createElement('span');
let find = false;
console.log(find);
submit.addEventListener('click',function() {
    // situazione in cui: utente trovato, stiamo cercando un altro utente.
    if(find) {
        result.innerHTML = '';
        find=false;
    }
    // ottengo nome e trasformo in minuscolo per controllo
    const name = inputText.value.toLowerCase();
    //Imposteremo una variabile FIND a false, settata a true indicherá che abbiamo trovato il nome
    // CICLO FOR: finche non scorriamo tutta la lista o/e troviamo il nome
    // for(let i=0;i<invited.length && !find;i++) {
    //     //controllo variabile con elemento i-esimo della lista e se i nomi corrispondono setto variabile FIND a true.
    //     if (name == invited[i].toLowerCase()) {
    //         find=true; //finisce ciclo
    //     }
    // }
    // CICLO WHILE
    let i = 0;
    while (i < invited.length && !find) {
        //controllo variabile con elemento i-esimo della lista e se i nomi corrispondono setto variabile FIND a true.
        if (name == invited[i].toLowerCase()) {
            find=true; //finisce ciclo
        }
        i += 1;
    }

    // stampo esito in base a variabile FIND: se true entra, altrimenti no
    if(find) {
        result.innerHTML='<br>Nome trovato. Puoi entrare.';
    } else {
        result.innerHTML+='<br>Nome NON trovato. Riprova.';
    }
});
form.append(result);

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