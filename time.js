// Syantax of setTimeout
// setTimeout(<function>,<Time-delay>)

// Syantax of setInterval
// setTimeout(<function>,<Time-delay>)

//----------------------------------------------------------
// let limit=1;
// setTimeout(() => {
//     for(let i=0; i<=2; i++){
//         if(limit < 4){
//             console.log(`Hi function ${i}`)
//             limit++;
//     } else {
//         clearInterval()
//     }
// }    
// },1000);
//----------------------------------------------------------------

// let limit=1;
// setInterval(() => {
//     for(let i=0; i<=2; i++){
//         if(limit < 4){
//             console.log(`Hi function ${i}`)
//             limit++;
//         }        
//     //  else {
//     //     clearInterval()
//     // }
// }    
// },1000);

//------------------------------------------------------

// const limit = 1;
// const example=(username,password)=>{
//     console.log(`Hi user your username is ${username} & password is ${password}`);
// } 
// let a=setInterval(example,1000,'abc','1234');   //After 1 seconds
// setTimeout ( ()=>{
//     clearInterval(a);
// },5000)  //After 5 seconds clear the interval

//synchronization means,executing line by line
//Asynchronization setTimeout,setInterval, works on asynchronization one line is dependent on the other line result

//DOM
//Document  object model