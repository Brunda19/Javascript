// forEach method  

// const numbers = [1, 2, 3];
// numbers.forEach((num) => {
//   console.log(num);
// });
// ........................................................

// const str = ["Anu","Adhi","Ammu","Sanni"];
// str.forEach((str) => {
//     console.log(str)
// });
// .........................................................
// var array=[10,13,5,8,13,90,6,7];
// array.forEach(function(value,index,array){
//     //  console.log(value)
//     // console.log(index)
//     //  console.log(array)
//     console.log(index+"="+value);
//  })

// ===============================================================================================================

// Map method
//Map methods create a new array

// const numbers = [1,2,3,4,5]
// const square = numbers.map((num) =>  num * num)
// console.log(numbers)
// console.log(square)
// ..............................................................

// var array=[10,13,5,8,13,90,6,7];
// var newArray = array.map(function(value,index,array){
//     // return value;
//      return value + 10 ;
//     // return index;
//     //  return array;
//    console.log(value);
// });
// console.log(newArray)

// ===================================================================================================================

//Filter method
//Filter array methods create new array with array elements,and filter the elements

// var array=[10,13,5,8,13,90,6,7,56,78];
// var arr=array.filter(function(value,index,array){   //Filter the values by using filter methods
//     // return value>20;  
//     return value<60; 
//     //console.log(value);
// });
// console.log(arr);

// ..............................................................................................

// var n = [1,2,3,4,5,6,7]
// var even_n = n.filter((n) => n % 2 == 0 );
// var odd_n = n.filter((n) => n % 2 !== 0);
// console.log(even_n)
// console.log(odd_n)

//========================================================================================================

//Reduce method 
//ruduce methods runs a function, to produce a single element

// var array = [10,13,5,8,13,90,6,7,56,78];
// var total = array.reduce(function(sum,value,index,array){
    
//     // return sum+value;
//     return sum * value;
// });
// console.log(total);

// ...........................................................

// const numbers = [1,2,3,4,5,6,7,8,9]
// const sum = numbers.reduce((total,num) => total + num)
// console.log(sum)

// ========================================================================

// Find method

// const numbers = [1, 2, 3, 4];
// const firstEven = numbers.find((num) => num % 2 === 0);        //output 2
// console.log(firstEven); 

// =======================================================================

// FindIndex
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const index = numbers.findIndex((num) => num > 4);
// console.log(index);                                               // Output: 2

// =======================================================================

const numbers = [10, 20, 30];

// for (const index of numbers.keys()) {
//   console.log(index);
// }                                                        // Output: 0, 1, 2

// for (const value of numbers.values()) {
//   console.log(value);
// }                                                     // Output: 10, 20, 30

for (const [index, value] of numbers.entries()) {
  console.log(index, value);
}                                                     // Output: 0 10, 1 20, 2 30


// ==========================================================================================================

// Array functions    Filter,Reduce,Map  those are all array function

//-----------------------------------------------------------------

// original_array=[22,24,25,26,27,30,-22,28]           using filter function
// let nw_array=Array()                                
// for (let element of original_array){
//     if(element>=25 && element<=28){
//         nw_array.push(element)
//     }
// }
// console.log(nw_array)
// //-------------------------------------------------------
// original_array=[22,24,25,26,27,30,-22,28]            using reduce function
// let sum_of_array=0                                     
// for(let element of original_array){
//     sum_of_array+=element
// }
// console.log(sum_of_array)

// //-------------------------------------------------------
// original_array=[22,24,25,26,27,30,-22,28]               using Map function
// let modifying_array=Array()                             
// for(let element of original_array){
//     modifying_array.push(element+20)
// }
// console.log(modifying_array)

//-----------------------------------------------------------

// original_array=[22,24,25,26,27,30,-22,28]   
// let modified_array=original_array.map((element) =>{       //map modifying the array 
//     return element + 20
// })
// console.log(modified_array)

// --------------------------------------------------------------
//user defined function
// let my_func=(...myarray)=>{
//     for (let element of myarray){
//         return element+10
//     }
// }
// obj=my_func(11,31,51)
// console.log(obj)

//-----------------------------------------------------------------
// original_array=[22,24,25,26,27,30,-22,28]   
//  let modified_array=original_array.filter((element) =>{
//      return element>=25 && element <=28                    // filter return the condition
//  })
//  console.log(modified_array)

//-------------------------------------------------------------------

// original_array=[22,24,25,26,27,30,-22,28]   
//  let modified_array=original_array.reduce((a,b) =>{       // Reduce hepls to sum the elements & reduce will take 2 parameters
//      return a+b
//  })
//  console.log(modified_array)

//------------------------------------------------------------------

// original_array=[22,24,25,26,27,30,-22,28]                     //Foreach function
//  let modified_array=original_array.forEach((a)=>{                 
//     console.log(a+20)
//  })
//  console.log(modified_array)

 // Difference between map,filter,foreach,reduce  array functions

 //Map --one, return as array
 //Filter--one, return as array
 //Forech--one, can't return
 //Reduce--two mandatory, return whole sum of values

//  original_array=["Python","Java","Ruby"]
//  let modified_array=original_array.map((a))=>{
    
//  }
 

                        


