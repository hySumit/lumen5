let form = document.getElementById("form");
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let paassInput = document.getElementById('psd');

form.addEventListener('submit',function(user){
    user.preventDefault();

    let userDetails = {
        email:emailInput.value,
        password: paassInput.value,
        name: nameInput.value,

    }
    localStorage.setItem("userDetails",JSON.stringify(userDetails));

})








let email = document.getElementById("email");
let password = document.getElementById("psd");
let name1 = document.getElementById("name");

document.addEventListener('click', function (event) {
    if (event.target === email) {
        email.style.borderColor = "#5846F6";
        
    } else {
        email.style.borderColor = "#9FAABF";
    }
});

document.addEventListener('click',function(event2){
    if(event2.target === password){
        password.style.borderColor = "#5846F6"
    }
    else{
        password.style.borderColor = "#9FAABF"
    }
})

document.addEventListener('click',function(event3){
    if(event3.target === name1){
        name1.style.borderColor = "#5846F6"
    }
    else{
        name1.style.borderColor = "#9FAABF"
    }
})
