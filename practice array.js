let  grade = [85,97,44,37,76,60];

let sum = 0;

for(let val of grade) {
    sum += val;
}

let avg = sum / grade.length;
console.log("avarage marks of student =",avg);

// Q 2
let items = [250,645,300,900,50];

let i= 0;
for (let val of items) {
   
    let offer = val/10;
    items [i] = items[i] - offer;
    console.log("value after offer =",items[i]);
    i++;

}


// method practice

let companies = ["bloomberg", "microsoft","uber","google","ibm","netflix"];

// Q delete first method-

// companies.shift();  // deletd first item

// Q 2 remove uber and add ola is its place

companies.splice(2,1,"ola");

// q add amazon at last
companies.push("amazon");
