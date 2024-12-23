let tableData = document.getElementById('API');

// let url= "https://jsonplaceholder.typicode.com/comments";
// fetch(url)
// .then((response) => response.json())
// .then((records) =>  records.forEach((data) => {
//         let tr = document.createElement('tr')
//         for (value in data){
//              tr.innerHTML += `<td> ${data[value]}</td>`
//         }
//         tableData.appendChild(tr);
//     }
// ));

// let url1="https://jsonplaceholder.typicode.com/posts";


let cardData = document.getElementById('postData');
let url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then((response)=> response.json())
    .then((records) => records.forEach((record) => {
        let createddiv = document.createElement('div')
        for (key in record){
            createddiv.innerHTML += `<div>${record[key]}</div>`
        }
        cardData.appendChild(createddiv);
    }
))
.catch((err) => console.log("catch",err));