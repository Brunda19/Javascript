let states = {
    Karnataka :['Bengaluru','Mysore','Shivamogga','Chikkamangalur'],
    Kerala:['Kannur','Kollam','Idukki','Kasargodu'],
    Goa:['Panaji','Mapusa','Bicholim'],
    UP:['Agra','Aligarh','Ayodya'],
    Bihar:['Araria','Banka','Patna']   
}
let stateTag = document.querySelector("#state")
console.log(stateTag);

let districtsTag = document.querySelector("#District");
console.log(districtsTag);

let cityTag = document.querySelector("#city")
console.log(cityTag);

let villageTag = document.querySelector("#village")
console.log(villageTag)

const district_values=() => {
    if(stateTag!== ''){
        for(let keys in states){
            if (keys == stateTag.value){
                districtsTag.innerHTML=' ';
                states[keys].forEach(element => {
                    let option = document.createElement('option');
                    option.innerHTML = `${element}`;
                    districtsTag.appendChild(option);
                });
            }
        }
    }
}

let cities = {
    Bengaluru : ['Rajajinagar','Vijayanagar','Yalahanka','Jayanagar','Malleshwram'],
    Shivamogga :['Shikaripura','Sagar','Soraba']
}

const city_values =()=>{
    if(districtsTag!=" "){
        for (let keys in cities){
            if(keys == districtsTag.value){
                cityTag.innerHTML="";
                cities[keys].forEach(data=>{
                    let option=document.createElement('option')
                    option.innerHTML= `${data}`;
                    cityTag.appendChild(option)
                })
            }
        }
    }
}

let villages = {
    Shikaripura :['CN koppa','Kaginalli','Maravalli'],
    Sagar : ['Jalahalli','Yashavantapur','RR Nagar']
}
const village_values =()=>{
    if(cityTag!=" "){
        for(let keys in villages){
            if(keys == cityTag.value){
                villageTag.innerHTML="";
                villages[keys].forEach(data=>{
                    let option=document.createElement('option')
                    option.innerHTML = `${data}`;
                    villageTag.appendChild(option)
                });
            }
        }
    }
}