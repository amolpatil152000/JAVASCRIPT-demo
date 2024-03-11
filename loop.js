// for loop

// for (let i = 1; i<=1000; i++) {
//     console.log("Amol Patil") 
// }
// console.log("loop are ended");

// let sum = 0;
// for(let i=1; i<= 5; i++) {
//     sum = sum + i; 
// }
// console.log("sum =",sum);


// while loop
// let i=1;

// while (i<=10) {
//     console.log("While loop");
//     i++;
// }

// do while loop


let a = 1;
do {
    console.log("do while loop=",a);
    a++;

} while (a <= 5);


//for of loop
let str = "for-of-loop";
for (let i of str) {
    console.log("i=",i);
}


//for in loop

let student = {
name: "Amol Patil",
age: 20,
cgpa: 7.9,
ispass: true
};

for(let key in student){
    console.log("key =",key, "value =",student[key]);
}







