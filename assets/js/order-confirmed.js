const params = new URLSearchParams(window.location.search);

const fio = params.get("fio");
document.getElementById("fio").innerHTML = fio;

const email = params.get("email");
document.getElementById("email").innerHTML = email;   

const phone = params.get("phone");
document.getElementById("phone").innerHTML = phone;

const paymethod = params.get("choice");
document.getElementById("paymethod").innerHTML = choice;   