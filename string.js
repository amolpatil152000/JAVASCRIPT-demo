let str = "amol patil";
let str2 = "amol\npatil" // \n for new line
let str3 = "amol\tpatil" // \t for tab
 
console.log(str);

console.group(str[8]); //index

console.log(str2);

console.log(str3);

console.log(str.slice(1,8));

console.log(str2.replace("a","s"));
// string method

//str.toUpperCase()
// str.LowerCase()
// str.trim  -this for the remove the whitespaces
// str.slice(start,end?)  -return part of string
// str1.concat(str2)  -join str2 with str1
// str.replace(searchVal, newVal) 
// str.charAt(id) - this for sttring index char 

str=str.toUpperCase()
console.log(str);
