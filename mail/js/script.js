/* 1 */

let userMail = prompt('Inserisci la tua mail:');

/* 2 */

let correctMailArray = ['cicciopasticcio@mail.com', 'boolean@mail.com', 'correctmail@mail.com', 'mailgiusta@mail.com'];

let mailChecked;

for (let i=0; i < correctMailArray.length; i++){
    if (correctMailArray[i] == userMail){
        mailChecked = userMail;
    }
}

/* 3 */

if (mailChecked){
    console.log('Benvenuto')
} else{
    console.log('Inserisci una mail valida')
}