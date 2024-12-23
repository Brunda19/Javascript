let userData=[{
            name:"Anu",
            age:23,
            address:"Smg"
         },
         {
            name:"Aru",
            age:25,
            address:"Dvg"   
        },
        {
            name:"Asha",
            age:26,
            address:"Bnglr"  
        },
        {
            name:"Bhomi",
            age:29,
            address:"Mnglr"  
        },
        {   
            name:"Bindu",
            age:21,
            address:"Gadaga"
        }
]
let id=1
let parenttag=document.createElement('div')
parenttag.setAttribute('id','parent')
document.body.appendChild(parenttag)
for(let data of userData){
    if(data.age>25){
        let childtag=document.createElement('div')
        childtag.setAttribute('class','childclass')
        childtag.innerHTML=
        `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.age}</h6><p class="card-text">Some quick example text to build on
        the card title and make up the bulk of the card's content.</p><a href="#" class="card-link">${data.address}</a>
        </div>
        </div>`  
        
    document.getElementById('parent').appendChild(childtag)
    id+=1

    }
}