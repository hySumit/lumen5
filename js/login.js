let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let paassInput = document.getElementById("psd");

form.addEventListener("submit", function (user) {
  user.preventDefault();

  let userDetails = {
    email: emailInput.value,
    password: paassInput.value,
    // name: nameInput.value,
  };
  // localStorage.setItem("userDetails",JSON.stringify(userDetails));
  let loginData = JSON.parse(localStorage.getItem("userDetails")) || {};

  if (
    userDetails.email === loginData.email &&
    userDetails.password === loginData.password
  ) {
    localStorage.setItem("isAuth", "Authenticated")

    alert("Welcome to the site");
  }
  else{
    alert("wrong credentials")
  }

});

// redirect >>>>>>> 

let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if (isAuth !=="Authenticated"){
    window.location.href = '../pages/dashboard.html'
}
else{
    localStorage.clear()
}



// stylye   >>>>>>



document.addEventListener("click", function (event) {
  if (event.target === emailInput) {
    emailInput.style.borderColor = "#5846F6";
  } else {
    emailInput.style.borderColor = "#9FAABF";
  }
});

document.addEventListener("click", function (event2) {
  if (event2.target === paassInput) {
    paassInput.style.borderColor = "#5846F6";
  } else {
    paassInput.style.borderColor = "#9FAABF";
  }
});
