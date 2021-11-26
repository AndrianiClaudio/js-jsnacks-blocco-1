const container = document.querySelector('.container');
const span = document.createElement('span');
// CICLO FOR
const buttonFor = document.querySelector('.btn-for');
// console.log(buttonFor);
buttonFor.addEventListener('click',function(){
    //somma parte da 0
    let sum = 0;
    let alert = false;
    for(let i = 0;i<10;i++) {
        //ottengo numero
        const number = parseInt(prompt(`Inserisci numero: ${(i + 1)}: `));
        //se ricevo valore numerico sommo, altrimenti valuto come 0 (non eseguo somma)
        if (!isNaN(number)) {
            sum += number;
        } else {
            alert = true;
        }
    }
    container.append(span);
    span.innerHTML =
    `
    <br>
    <strong>
        Somma con ciclo for: ${sum}.
    </strong>
    `;
    if(alert) {
        span.innerHTML += ' Sono stati inseriti anche valori non numerici che non sono stati considerati per non generare errore';
    }
});

// CICLO WHILE
const buttonWhile = document.querySelector('.btn-while');
// console.log(buttonWhile);
buttonWhile.addEventListener('click', function (){
    let sum = 0;
    let i = 0;
    let alert = false;
    while(i<10) {
        const number = parseInt(prompt(`Inserisci numero: ${(i+1)}: `));
        //se l'utente digita bene calcola, altrimenti conta number come 0
        if(!isNaN(number)) {
            sum += number;
        } else {
            alert=true;
        }
        i+=1;
    }
    container.append(span);
    span.innerHTML =
    `
    <br>
    <strong>
        Somma con ciclo while: ${sum}
    </strong>
    `;
    if (alert) {
        span.innerHTML += ' Sono stati inseriti anche valori non numerici che non sono stati considerati per non generare errore';
    }
});