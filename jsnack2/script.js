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
submit.addEventListener('click',function() {
    result.innerHTML = '';
    // ottengo nome e trasformo in minuscolo per controllo
    const name = inputText.value.toLowerCase();
    //Imposteremo una variabile FIND a false, settata a true indicherá che abbiamo trovato il nome
    // CICLO FOR: finche non scorriamo tutta la lista o/e troviamo il nome
    let findFor = false;
    for(let i=0;i<invited.length && !findFor;i++) {
        //controllo variabile con elemento i-esimo della lista e se i nomi corrispondono setto variabile FIND a true.
        if (name == invited[i].toLowerCase()) {
            findFor=true; //finisce ciclo
        }
    }
    // CICLO WHILE
    let findWhile = false;
    let i = 0;
    while (i < invited.length && !findWhile) {
        //controllo variabile con elemento i-esimo della lista e se i nomi corrispondono setto variabile FIND a true.
        if (name == invited[i].toLowerCase()) {
            findWhile=true; //finisce ciclo
        }
        i += 1;
    }
    // stampo esito in base a variabile FIND per il ciclo for: se true entra, altrimenti no
    if(findFor) {
        result.innerHTML+='<br>Nome trovato con ciclo for. Puoi entrare.';
    } else {
        result.innerHTML +='<br>Nome NON trovato con ciclo for. Riprova.';
    }
    // stampo esito in base a variabile FIND per il ciclo while: se true entra, altrimenti no
    if(findWhile) {
        result.innerHTML +='<br>Nome trovato con ciclo while. Puoi entrare.';
    } else {
        result.innerHTML +='<br>Nome NON trovato con ciclo while. Riprova.';
    }
});
form.append(result);