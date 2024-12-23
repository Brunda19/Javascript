let fruits = ["apple", "banana", "cherry"];

let numbers = new Array(10);                               // Creates an array with 10 undefined slots
let mixed = new Array("apple", 42, true);                   // Creates an array with initial elements
console.log(mixed)
console.log(fruits[0])                                      //accessing array
console.log(fruits[fruits.length-1])                         //accessing last element
console.log(fruits.length);                                 //returns the number of elements in array
fruits.push("date");
console.log(fruits)                                         //add the element end of the  array
fruits.pop();
console.log(fruits)                                         //remove the last element
fruits.unshift("elderberry");
console.log(fruits)                                         // add the element beginning of the  array
fruits.shift();                                             //remove the fast element
console.log(fruits) 

let vegetables = ["carrot", "pepper"];
let combined = fruits.concat(vegetables);                    //concat means joins two array            
console.log(combined)

console.log(fruits.indexOf("banana"));                      //Find the index of an element
console.log(fruits.includes("apple"));                      //Check if an element exists.

fruits.reverse()                                            //It prints the reverse of the array
console.log(fruits)    

fruits.splice(1, 1, "blueberry");                             // Replaces "banana" with "blueberry
console.log(fruits)

let sliced = fruits.slice(1, 3);                              //Extract a section of the array
console.log(fruits)
console.log(sliced)









