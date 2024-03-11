// print all number from 0 to 100

for( let num = 0; num<=100; num++) {
    console.log("num =",num);

}

// print all even number from 0 to 100

for( let num = 0; num<=100; num++) {
    if(num % 2 === 0){

        console.log("num =",num);  
    }
    

}

/* Q.2- create a game where you start with any random game number.
   ask tghe user to keep guessing the game until the user enter correct value
   */

   let gameNum = 25;

   let userNum = prompt("guess the game number : ");
  
while(userNum != gameNum) { 
    userNum = prompt("You entered wrong number. Guess again :")

}

console.log("Congratulations, You entered the right number");
