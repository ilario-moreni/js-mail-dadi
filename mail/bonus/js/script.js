/* bonus */
let correctMailArray = ['cicciopasticcio@mail.com', 'boolean@mail.com', 'correctmail@mail.com', 'mailgiusta@mail.com'];

let userMail;

document.getElementById('my_button').addEventListener('click', function(){

    userMail = document.getElementById('input_mail').value;

    console.log(userMail);



    let mailChecked;

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

