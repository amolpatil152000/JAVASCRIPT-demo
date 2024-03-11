let a = 6;
let b = 5;

let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2 =", cond1 && cond2); 

let cond3 = a < b;
let cond4 = a == 6;
console.log("cond1 && cond2 =", cond3 && cond4);

// logocal OR
console.log("cond1 || cond2", a < b || a ===6 );

// logical not
console.log("!(6<5) =", !(a < b) ); // ans always opiste