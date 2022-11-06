#! /usr/bin/env node
let inp = prompt("enter word to check for palindrome");
let test = inp.toLowerCase();
let arr = test.split("");
let arr1 = arr.reverse();
let newstr = arr1.join("");
if (newstr == test) {
  console.log("Yes it is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
