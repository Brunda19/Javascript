// var array=['H',1,'T',2.5,'M',36,'L',28,38];
// var total=array.reduce(function(sum,value,index,array){
//     return sum+value;
// });
// console.log(total);

// var array=['H',1,'T',2.5,'M',36,'L',28,38];
// var newArray=array.map(function(value,index,array){
//     return value;
// });
// console.log(value);

//------------------------------------------------------
//Using For loop
// input_array=['H',1,'T',2.5,'M',36,'L',28,38];
// let word=''
// let total=0
// for (let elements of input_array){
//     if (typeof elements === "number"){
//             total+=elements
//     }else{
//         word+=elements
//     }
// }
// console.log(word);
// console.log(total);
//---------------------------------------------------------
//using filter, reduce 
// let input_array = ['H',1,'T',2.5,'M',36,'L',28,38];
// let string_array = input_array.filter((element) => {
//     return typeof element == "string";
// })
// let number_array = input_array.filter((element) => {
//     return typeof element == "number";
// })
// let total = number_array.reduce((a,b) => {
//     return a+b;
// })
// let word = string_array.reduce((a,b) => {
//     return a+b;
// })
// console.log(word);
// console.log(total)
//--------------------------------------------------------------
// let string="Javascript"
// for ( let elements of  string){
//     console.log(elements);
// }

// for (let i=0; i<string.length;i++){
//     console.log(i);
// }

//----------------------------------------------------------
// let string="Javascript"
// for (let i=0; i<string.length;i++){
//         console.log(i);
// }
// console.log(string[5])
//-----------------------------------------------------------
// let string="Javascript"
// for (let i=string.length; i>=0;i--){
//         console.log(i);
//         console.log(string[i]);
// }
// //console.log(string[0]);

// let input_array=['HTML','CSS','Javascript']
// let output=input_array.map((element) => {
//     let reversed_word=' '
//     for (let i=element.length-1; i>=0; i--){
//         reversed_word += element[i]
//     }
//     return reversed_word;
// })
// console.log(output);

//----------------------------------------------------------------------------

//  function add(a,b){
//      console.log(a+b);
//  }
// //setTimeout(print_Hi,5000);
// setInterval(add,1000,10,30);

//  function print_Hi(){
//      console.log("Hi Javascript")
//  }
// //setTimeout(add,2000,5,6);
// setInterval(print_Hi,2000);

//----------------------------------------------------------------------------
