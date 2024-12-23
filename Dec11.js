document.getElementById('new form').addEventListener('submit',function(event) {
    event.preventDefault();

const firstname = document.querySelector('First  Name').value.trim();

const lastname = document.querySelector('Last Name').value.trim()

const age =  document.querySelector('Age').value.trim()

if (!firstname || !lastname || !age){
    document.getElementById('output').innerText = 'Please fill out all fields.';
    return;
}

document.getElementById('output').innerText = `Hi, I am ${firstname} ${lastname} $ I'm ${age} old`
});