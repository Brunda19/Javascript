 //Array methods    
 let array=[1,1.5,"Hi","Javascript","Python"]
 array.push(2);
 console.log(array);
 array.pop();                    //Its remove the last element of an array
 console.log(array);
 array.shift();                  //Its remove the beginning  element of an array
 console.log(array);
 array.unshift('Hello');         //Its add the element in beginning element of an array
 console.log(array);
 console.log(array.toString());  //Its converting all the elements array into string
 array.sort();                   //Its not work in heterogenous data
 console.log(array);


 arr=[9,-1,-9,4,0,2,7,-5,6,11,-13,15]
 arr.sort();                     //Its only sort the homogenous data
 console.log(arr);
 arr.reverse();
 console.log(arr);
 console.log(arr.slice(2,4));
 console.log(arr.splice(2,2,"Hello","How",8)); 
 console.log(arr);  
