/* 1 */

let playerScore, computerScore;

playerScore = Math.floor(Math.random()*6) + 1;

computerScore = Math.floor(Math.random()*6) + 1;

console.log(computerScore+': punteggio del computer');
console.log(playerScore+': punteggio del giocatore');

/* 2 */

if (playerScore == computerScore){
    console.log('Pareggio');
} else if (playerScore > computerScore){
    console.log('Hai vinto');
} else{
    console.log('Hai perso');
}