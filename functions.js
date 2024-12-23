//Formal Functions

// function myfunction(a,b){
//     return a+b
// }
// let obj=myfunction(5,15)
// console.log(obj)

// -------------------------------------------------------------------

// // //Arrow functions
//  

// --------------------------------------------------------------------

//   let sum_add=(a,b,c,d,e,f)=>{

//   arr1=[]
//   arr2=[] 
//   namfun=[a,b,c,d,e,f]                   //0,1,2,3,4,5,6, indexses accessing
//   for(let i=0; i<7; i++){
//       if(namfun[i]%2==0){
//           arr1.push(namfun[i])
//       }
//       else{
//           arr2.push(namfun[i])
//      }

//   }  
//   return [arr1,arr2]
//   }
//   let e =sum_add(5,6,7,8,9,10)
//   console.log(e[0])
//   console.log(e[1])    

// --------------------------------------------------------------------------------------------

// //Function callback

//  let parent=(a)=>{
//      return a**3
// }
//  let child=(funname,arg)=>{       //one function is executing other function is called function
//      return funname(arg);

// }
//  let obj=child(parent,5)
//  console.log(obj)

//exmple=======================================================================================

    //  let parent=(a)=>{
    //      return a**3
    //  }
    //  let child=(funname,arg)=>{            
    //      if(funname(arg)>100){                    //If condition inside the arrow function
    //          return "it's greaterthan 100"
    //      }else{
    //          return funname(arg)+100
    //      }
    //  }
    //  let obj=child(parent,9)
    //  console.log(obj)
   
    
   
