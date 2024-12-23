// console.log(5=="3")
// console.log(5=="5")
// console.log(5>="3")

//--strictyly equal to
// console.log(2===2)
// console.log(2==="2")
// console.log(2===9)
// console.log(2==="9")

// x = 9
// console.log(x>=5)

// function isGreaterThanFive(num){
//     console.log(num>=5)
// } 
// let obj=isGreaterThanFive(9)

//-------------------------------------------------------------------------------------------------------------------------------------

//Conditional statements in js if,else,

// Check if a number is positive, negative, or zero

// let num = -99999999;
// if (num > 0){
//     console.log("positive number")
// }
// else if(num < 0){
//     console.log("Negative number")
// }
// else{
//     console.log("Zero")
// }

//-----------------------------------

//Check if a number is even or odd

// let num = 67
// if (num%2== 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
//--------------------------------------

//Find the largest of three numbers

// let a=30, b= 50, c=0;
// if(a > b){
//     console.log("a is greater")
// } 
// else if ( b > c){
//     console.log("b is greater")
// }
// else if(c > a){
//     console.log("c is greater")
// }else if(a===c)
// {
//     console.log("a equal to c")
// }
// else{
//     console.log("Its equal to")
// }

//--------------------------------------------------
// Check if a number is divisible by both 3 and 5

//  let num = 30;
//  if(num %3 ==0 && num %5 == 0){
//     console.log("Its divisible by both 5 and 3")
//  }
//  else{
//     console.log("Its not divisible by 5 and 3")
//  }

//----------------------------------------------------------------

// Check if a person is eligible to vote

// let age = 18
// if(age>=18){
//     console.log("Person is eligible to Vote")
// }else{
//     console.log("Person is not eligible to vote")
// }

//-------------------------------------------------------------------------

//Check if a year is a leap year
// year = 2020
// if( year%4 == 0){
//     console.log("Its is leap year")
// }else{
//     console.log("Its not a year year")
// }

//-------------------------------------------------------------------------------

//Compare two strings
// let A  ="BRUNDA"
// let a  ="brunda"
// if( A===a){
//     console.log("Two string are equal")
// }else{
//     console.log("Two string are not equal")
// }

//-------------------------------------------------------------------------------

// Problem 1: Grading System
// Write a JavaScript program that assigns a grade based on the student's score. The grade will follow these criteria:

// 90 and above: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

//Answer
// let marks = 190;
// if(marks < 60)
//     console.log("Failed")
// else if(marks<69)
//     console.log("Grade:D")
// else if(marks<79)
//     console.log("Grade:C")
// else if(marks<89)
//     console.log("Grade:B")
// else if(marks<=100)
//     console.log("Grade:A")
// else
//     console.log("Outstanding")

//---------------------------------------------------------------------------------------

//Problem 2: Age Group Classification
// Write a program that classifies a person based on their age:

// 0–12: "Child"
// 13–19: "Teenager"
// 20–59: "Adult"
// 60 and above: "Senior"
//==

// age = 90
// if(age<=12)
//     console.log("Child")
// else if(age<=19)
//     console.log("Teenager")
// else if(age<=59)
//     console.log("Adult")
// else
//     console.log("Senior")

//----------------------------------------------------------------------------------------
//Triangle Type Checker
// Write a JavaScript program that checks the type of triangle based on the lengths of its sides. The program should print:

// "Equilateral" if all three sides are equal
// "Isosceles" if two sides are equal
// "Scalene" if all three sides are different

//==

// let a = 8, b = 8, c = 8
// if( a==b && b==c && c==a)
//     console.log("Equilateral")
// else if ( a==b || b==c || a==c)
//     console.log("Isosceles")
// else
//     console.log("Scalene")

