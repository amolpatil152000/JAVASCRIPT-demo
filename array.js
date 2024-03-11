let marks =  [97,87,67,56,89];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman","thor","captain","wido","antman","spiderman"];
// print value in array

// using for loop
for (let idx=0;  idx<heroes.length; idx++) {
    console.log(heroes[idx]);
}

//using for of
let cities = ["karad","pune","satara","mumbai","benglore"];

for( let city of cities) {
    console.log(city.toUpperCase());   //.toUppercase method uppercase

}

// array method = push() 

let foodItems = ["potato","apple","litchi","tomato"];

foodItems.push("chips","burger","panner"); //add to end

console.log(foodItems);

//array method = pop()

foodItems.pop();   //delete from end

let deletedItem = foodItems.pop();  // to chack which is deleted

console.log(foodItems);
console.log("deleted = ", deletedItem);

// array method = tostring()
let num =[95,86,54,36];
console.log(num.toString());

// array method = concat();

let marvelHeroes = ["thor","spider","ironman"];
let dcHeroes = ["superman", "batman"];

let mixhero = marvelHeroes.concat(dcHeroes);
console.log(mixhero); 

// slice method

console.log(mixhero.slice(1,4));

// splice method - change in  origin array


let arr = [1,2,3,4,5,6,7];
 
   //add element usinng splice

arr.splice(2,0,101);

   // delete using splice

arr.splice(3,1);

   // replace usimg splice

arr.splice(3,1,101);

