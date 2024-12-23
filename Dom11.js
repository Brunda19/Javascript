let container = document.querySelector("#container");
console.log(container);

// let p=document.createElement('p');  //creating the tag
// p.innerHTML="This is a tag added by DOM"; //adding the content to tag
// container.appendChild(p)     //adding the child to parent

// let r = document.querySelector('h1')
// container.removeChild(r);              //It remove the particular tag

//how to add the attribute
// p.setAttribute("class",'newclass');
// p.setAttribute("id",'newid');
// p.setAttribute("name","Adhi");
// p.setAttribute("value",'newvalue');

// //access the html page attribute
// let demo_id = document.querySelector("#demo");
// let demo_result = demo_id.getAttribute("class");
// console.log(demo_result);

// let demo_name=document.getElementByName("demo_name");

//how to remove attribute
// demo_id.removeAttribute("class");    //remove the class name
// demo_name.removeAttribute("id");

// demo_id.classList.add("oldclass")  //add the classname to the existing class attribute
// demo_id.classList.remove("demo_class")  // it will remove the only class name

// with javscript the CSS
// demo_id.style.color = "blue";
// demo_id.style.backgroundColor = "lightpink";
// demo_id.style.fontSize = "20px";
// demo_id.style.fontWeight = "900";

// demo_id.setAttribute('style','color:Red; background-color: grey; font-size: 30px;' ); // This is inline css

// let userForm = document.querySelector("#userForm");
// let userName = document.getElementById("userName");
// let Age = document.getElementById("Age");
// let userTable = document.getElementById("userTable");


















let userForm = document.querySelector("#userForm");
    let userName = document.getElementById("userName");
    let Age = document.getElementById("Age");
    let userTable = document.getElementById("userTable");

    // Initialize the ID counter
    let id = 1;

    // Function to add data to the table
    let addData = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Create a new table row
        let tr = document.createElement("tr");

        // Populate the row with data
        tr.innerHTML = `<td>${id}</td> 
                        <td>${userName.value}</td> 
                        <td>${Age.value}</td>`;

        // Append the row to the table
        userTable.appendChild(tr);

        // Increment the ID counter
        id += 1;

        // Clear the input fields for the next entry
        userName.value = "";
        Age.value = "";
    };

    // Add an event listener for the form's submit event
    userForm.addEventListener("submit", addData);






// let id=1
// let addData=(e)=>{
//     e.preventDefault();
//     let tr=document.createElement("tr")
//     tr.innerHTML=`<td>${id}</td> <td>${userName.value}</td><td>${Age.value}</td>`;


//     userTable.appendChild(tr);
//     id+=1;

// }
// userForm.addEventListener("submit",addData)