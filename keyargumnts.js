// let nw_func=(username,age,address)=>{  //Actual argument
//         return [username,age,address];
//     }
//     let nw=nw_func("Adhi",22,"Shivamogaa")
//     console.log(nw);

// ====================================================================================

    //  let nw_func=(username='Ammu',age=24, address="Bnglr")=>{   //Default agrument
    //     return [username,age,address];
    //  }
    // // let nw=nw_func("Adhi",22,"Shivamogaa")
    // let nw=nw_func();
    //  console.log(nw);

// ----------------------------------------------------------------------------------------

    // let nw_func=(username='Ammu',age=24,address="Bnglr")=>{            //keyword agrument
    //         return [username,age,address];
    //       }
    //         // let nw=nw_func()
    //       let nw=nw_func({address:"Anu"},{age:25,username:'Mangalore'});
    //       console.log(nw);

    //  -------------------------------------------------------------------------------------

    // let num_Array=(...num)=>{
    //     return num;
    // }     
    // let number=num_Array(1,2,3,4,5,"Hi",null,true,undefined); 
    // console.log(number);

// =========================================================================================== 

// Spread operator

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

// ------------------------------------------------------------------------------------------------

let object_array=[['id',1],['name','abc'],['age',28]]
let myobject=object.fromEntries(object_array)
console.log(myobject)


//---------------------------------------------------------

// l=[22,24,25,26,27]
//     let output=Array()
//         for(let element of l){
//            output.push(element+20)
//         }
//         console.log(output)
