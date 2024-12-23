//forEach method

// var array=[10,13,5,8,13,90,6,7];
// array.forEach(function(value,index,array){
//     console.log(value)
//     //console.log(index)
//     //console.log(array)
// })


//Another method for forEach method
// var array=[10,13,5,8,13,90,6,7];
// array.forEach(arrayIteration);
// function arrayIteration(value,index,array){
//     console.log(value);
//     //console.log(index+"="+value);
//     //console.log(array+"="+value)
// }
//--------------------------------------------------------------------------------------------

// Map method
//Map methods create a new array
// var array=[10,13,5,8,13,90,6,7];
// var newArray = array.map(function(value,index,array){
//    // return value;
//     //return value + 10 ;
//    // return index;
//    // return array;
//    console.log(value);
// });
//console.log(newArray)
//--------------------------------------------------------------------------------------------

//Filter method
//Filter array methods create new array with array elements

// var array=[10,13,5,8,13,90,6,7,56,78];
// var arr=array.filter(function(value,index,array){   //Filter the values by using filter methods
//     return value>20;   
//     //console.log(value);
// });
// console.log(arr);

//--------------------------------------------------------------------------------------------

//Reduce method 
//ruduce methods runs a function, to produce a single element

var array = [10,13,5,8,13,90,6,7,56,78];
var total = array.reduce(function(sum,value,index,array){
    
    return sum+value;
    return sum*value;
});
console.log(total);



