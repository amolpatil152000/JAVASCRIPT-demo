let num = prompt("Enter a number:");

if (num % 5 === 0){
    console.log(num,"is multiple of 5");
} else {
    console.log(num,"is not multiple of 5");
}

 
let score = 75;
let grades;
 
if (score >=90 && score <=100) {
    grades="A";
}
else if (score >=70 && score <=89) {
    grades="B";
}
else if (score >=60 && score <=69) {
    grades="C";
}
else if (score >=50 && score <=59) {
    grades="D";
}
else if (score >=0 && score <=49) {
    grades="F";
}

console.log("grade is = ",grades);