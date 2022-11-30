/* bonus */
//1 - salvare il valore di input in una variabile
//2 - controllare il valore salvato corrisponda ad un elemento dell'array
//3 - al click del pulsante cambiare l'h1 secondo le seguenti condizioni
//3.1 - SE è nella lista cambiare l'h1 in Benvenuto
//3.2 - ALTRIMENTI cambiare l'h1 in 'Inserisci una mail valida'

/* 1 */

let userMail = document.getElementById('input_mail').value;

console.log(userMail);

/* 2 */

let correctMailArray = ['cicciopasticcio@mail.com', 'boolean@mail.com', 'correctmail@mail.com', 'mailgiusta@mail.com'];

let mailChecked;



/* 3 */


document.getElementById('my_button').addEventListener('click', function(){
    for (let i=0; i < correctMailArray.length; i++){
        if (correctMailArray[i] == userMail){
            mailChecked = userMail;
        }
    }
    if (mailChecked){
        document.getElementById('output_message').innerHTML = 'Benvenuto';
    } else{
        document.getElementById('output_message').innerHTML = 'Inserisci una mail valida';   
    }
})

