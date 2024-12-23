let url = "https://jsonplaceholder.typicode.com/posts";

const newData = {
    userId:1,
    title:"new added title",
    body :"new added body"
}
fetch(url,{
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(newData)
})
.then(()=> console.log("data added"))
.catch((err) => console.log("error:",err))
console.log(newData)

// //using the fetch method in api it include both get and 

//-----------------------------------------------------------

url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then((response) => response.json())
.then((record) => console.log(record))
.catch((err)=>console.log("error:",err))

 sessionStorage.setItem("username","Ramu")
 sessionStorage.setItem("Firstname","ABC")
 console.log(sessionStorage.getItem("Firstname","ABC"))