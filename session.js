const userForm=document.getElementById('userForm');

const username = document.querySelector('#username');

const password = document.querySelector('#password');

function addSessiondata(e){
    e.preventDefault();
    sessionStorage.setItem("username",username.value);
    sessionStorage.setItem("password",password.value);
    localStorage.setItem("username",username.value);
    localStorage.setItem("password",password.value);
    document.cookie=`userName=${username.value}; expIresIn=Thu 04 Dec 2024 02:48:00 UTC;`;
    let cookiess = document.cookie
    console.log(cookiess);
    alert("successfully added")
    window.location.href="homesession.html"
}


function deleteSessiondata(){
    sessionStorage.clear();
    localStorage.clear();
    window.location.href="session.html";
}

userForm.addEventListener('submit',addSessiondata);
