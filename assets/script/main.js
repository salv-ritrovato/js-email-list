// API
const booleanMails = 'https://flynn.boolean.careers/exercises/api/random/mail';

// DOM MANIPULATION
const btnRefresh = document.getElementById('refresh')
const mailList = document.getElementById('mail-list')

// CALL TO API + FUNCTION
// Creo una funzione, genero un ciclo for ed inserisco all'interno di esso il fetch
// In questo modo il ciclo effettua 10 chiamate API generando 
function refreshMail() {
    for (let i = 0; i < 10; i++) {
        fetch(booleanMails)
            .then(res => res.json())
            .then(mail => {
                console.log(mail);
                mailList.innerHTML += `<li>${mail.response}</li>`
            })
    }
}

// RICHIAMO la funzione per stampare in pagina i 10 risultati
refreshMail()

// EVENT LISTENER per il bottone
// Servirà a refreshare la lista quando il listener intercetta il click dell'utente
btnRefresh.addEventListener('click', function(){
    // Inserisco questa linea di codice per ""svuotare"" la lista al click del bottone, prevenendo l'accumulo di emails
    mailList.innerHTML = '';
   refreshMail() 
})