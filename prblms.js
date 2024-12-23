// function FizzBuzz(){
//     for (let i=1; i<=100; i++){
//         if(i % 3 == 0 && i % 5 == 0)
//             console.log("FizzBuzz");
//         else if(i % 3 == 0)
//             console.log("Fizz");
//         else if(i % 5 == 0 ) 
//             console.log("Buzz");  
//         else
//             console.log(i);
//         }
//     }
    

function mergeSortedArrays(arr1, arr2){
    return [...arr1,...arr2].sort((a,b) => a - b);
}
    console.log(mergeSortedArrays([1,2,3],[3,4,5,6]));



    