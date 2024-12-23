// const obj = {
//     name: "JavaScript",
//     age:21,
//     getName() {
//         return this.name;                 // `this` now refers to `obj`          
//     },
//     getAge(){
//         return this.age;
//     }
    
// };
// console.log(obj.getName());  
// console.log(obj.getAge())             

// -------------------------------------------

// Hoisting variable
hoistedvariable=2;
console.log(hoistedvariable)
var hoistedvariable;

// -------

hoistedfunction()
function hoistedfunction(){
    console.log("Hello world");
}