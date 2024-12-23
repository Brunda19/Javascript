// //Formal Functions
// function myfunction(a,b){
//     return a+b
// }
// obj=myfunction(5,15)
// console.log(obj)

//  //let obj=myfunction(2,3)
//  //console.log(obj)

// // //Arrow functions
//  let myfunc=(a,b)=>{
//      return a+b
//  }

//  e=myfunc(2,3)
//  console.log(e)

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

// //Function callback
//  let parent=(a)=>{
//      return a**3
// }
//  let child=(funname,arg)=>{       //one function is executing other function is called function
//      return funname(arg);

//  }
//  let obj=child(parent,5)
//  console.log(obj)

//example of callback function
//  let parent=(a)=>{
//       return a**3
//   }
//   let child=(funname,arg)=>{                //one function is executing other function is called function callback
//       return funname(arg);
//       }
//   obj=child(parent,5)
//      console.log(obj)
 


//exmple

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
   
   
    //  let nw_func=(username,age,address)=>{  //Actual argument
    //     return [username,age,address];
    //  }
    //  let nw=nw_func("Adhi",22,"Shivamogaa")
    //  console.log(nw);

    //  let nw_func=(username='Ammu',age=24,address="Bnglr")=>{   //Default agrument
    //     return [username,age,address];
    //  }
    // //   let nw=nw_func("Adhi",22,"Shivamogaa")
    // let nw=nw_func('Shivamogga',34,'Skp');
    //  console.log(nw);

    // let nw_func=(username='Ammu',age=24,address="Bnglr")=>{   //keyword agrument
    //         return [username,age,address];
    //       }
    //      //   let nw=nw_func("Adhi",22,"Shivamogaa")
    //      let nw=nw_func({address:"Anu",age:25,username:'Mangalore'});
    //       console.log(nw);

    // let num_Array=(...num)=>{
    //     return num;
    // }     
    // let number=num_Array(1,2,3,4,5,"Hi",null,true,undefined); 
    // console.log(number);

//    let string_num_array=(...num) =>{           //Rest argument
//    let output = Array();
//     for(let elements of num){
//         if (typeof elements == "string"){
//             output.push(elements);
//         }else{
//             output.unshift(elements);
//         }
//     }
//    return output;
//    }
//    let myarr = string_num_array(1, 1.5,'Hi',2.5,'Bye',3.5,'Hello');
//    console.log(myarr);

//-----------------------------------------------------------------------------------------------------


//22/11/2024 Friday
// let create_object_with_array=(...myArray) =>{

//     if(myArray.length % 2 ==0){
//         let output=Array()
//         for(let i=0; i<myArray.length; i+=2){
//            // console.log(myArray[i],myArray[i+1])
//            output.push([myArray[i],myArray[i+1]])
//         }
//         let myobj=Object.fromEntries(output)
//         return myobj
//     }
//     else{
//         return 'Please provide valid argument'
//     }
// }

// let a=create_object_with_array('id',1,'name','Banu','age',23,'address','Bnglr')
// console.log(a);


// let object_array=[['id',1],['name','abc'],['age',28]]
// let myobject=object.fromEntries(object_array)
// console.log(myobject)


//---------------------------------------------------------

// l=[22,24,25,26,27]
//     let output=Array()
//         for(let element of l){
//            output.push(element+20)
//         }
//         console.log(output)

///-------------------------------------------------------
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

 original_array=["Python","Java","Ruby"]
 let modified_array=original_array.map((a))=>{
    
 }
 
