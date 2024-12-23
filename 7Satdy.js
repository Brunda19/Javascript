//Important
let  x = [
    {
        "id": 1,
        "name": "Prabhas",
        "age": 38
    },
    "python", 2, 3, 2.3, [1, "Welcome"]
    ]
 
    
    for item in x:
        if isinstance(item, str): 
            print(item)
        elif isinstance(item, list):  
            for sub_item in item:
                if isinstance(sub_item, str):  
                    print(sub_item)
        elif isinstance(item, dict):  
            print(item.get("name"))  
 
//------------------------------------------------------------------------------------------------
let p = [2.5,20,33,45,44,63,78]
let pp = []
for (i in p){
    if( p[i]%2==0){
        pp.push(p[i]/2)
    }else{
        pp.push(p[i])
    }
}
console.log(pp)
        





