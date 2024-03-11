let age=24;
let price=100.90;

let fullName="tony";
isFollow = true;
let x;
let y = null;

let a = BigInt("123");
let b = Symbol("Hello");

const student = {
    stdName : "Amol",
    age : 23,
    cgpa : 8.2,
    isPass : true,
};

console.log(student["age"]);
console.log(student.age);
console.log(student.cgpa);

student["age"] = student["age"]+1;
console.log(student["age"]);