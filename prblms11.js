// let a = ["Brunda",2,"Suchi",7.8,"Sinchi",5,"Ram",8,"hi",9,"hello"]
// arr1 = []
// arr2 = []
// for(let i of a){
//     if(typeof i=="string" && i.length <= 5){
//         arr1.unshift(i)
//     }
//     else if(typeof i=="number"){
//         arr1.push(i)
//     }
//     else{
//         arr2.push(i)
//     }
// }
// console.log(arr1)
// console.log(arr2)

// ---------------------------------------------------------------------------------------------------------

// let n = ["I",2,"am",2,"student",{'id':1,'name':'bindu','age':21},{'address':'Banglr','pin':577427}]

// let word ="";
// let total = 0;
// let object={};
// for(let i of  n ){
//     if(typeof i=="string")
//         word += i
//     else if(typeof i=="number")
//         total += i
//     else if(typeof i=="object")
//         Object.assign(object,i)

// }
// console.log(word)
// console.log(total)
// console.log(object)

// ---------------------------------------------------------------------------------------------------------

// function isPalindrome(str) { 

//     return str === str.split('').reverse().join(''); 
  
//   }

//   obj=isPalindrome('madam')
//   console.log(obj)

// --------------------------------------------------------------------------------------

function findMinNumber(arr){
    // return Math.max(...arr);
     return Math.min(...arr);
}

obj = findMinNumber([1,2,3,4,5,22,4,5,6,77,8,9])
console.log(obj)

