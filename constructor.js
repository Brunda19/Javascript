class UserDetails{
    constructor(username,age,address){
        this.a=username;
        this.b=age;
        this.c=address;
    }
    getName(){
        return `Hi ${this.a} `
    }
    getAge(){
        return `You're age is ${this.b} `
    }
    getAddress(){
        return `Your address is ${this.c} `
    }
    Greet(){
        return ` I am ${this.a} age is ${this.b} from ${this.c} `
    }
}
let p = new UserDetails("Arun",23,"Bangalore");
console.log(p.getName());
console.log(p.getAge());
console.log(p.getAddress());
console.log(p.Greet());

//     // obj.getName();
//     // obj.getAge();
//     // obj.getAddress();
//     // obj.Greet();
//------------------------------------------------

// class myMaths{
//     constructor(add,mult,square,add_all){
//         this.p=add;
//         this.q=mult;
//         this.r=square;
//         this.s=add_all
//     }
//     getAdd(){
//         return ` addition of 5 and 8 = ${this.p + this.s } `
//     }
//     getMult(){
//         return ` multplication of 6 and 8 = ${this.q * this.s} `
//     }
//     getSquare(){
//         return ` square of 8  = ${this.s * this.s} `
//     }
//     getAdd_all(){
//         return ` add_all numbers  = ${this.p + this.q + this.r + this.s} `
//     }
// }
// let M=new myMaths(5,6,7,8);
// console.log(M.getAdd());
// console.log(M.getMult());
// console.log(M.getSquare());
// console.log(M.getAdd_all());
