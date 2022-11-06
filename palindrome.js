#! /usr/bin/env node
let inp = prompt("enter word to check for palindrome");
console.log(inp);
let test = inp.toLowerCase();
let rev = "";
let arr = test.split("");
console.log(arr);
let arr1 = arr.reverse();
console.log(arr1);
let newstr = arr1.join("");
console.log(newstr);
if (newstr == test) {
  console.log("Yes it is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
