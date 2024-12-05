document.addEventListener("DOMContentLoaded", () => {

    let password = document.getElementById("password");
    let cPassword = document.getElementById("cPassword");
    let error = document.getElementById("error");



    if (password == "" && cPassword == "") {
        error.textContent = "*Password Required";
    } else if (password != cPassword) {
        error.textContent = "*Password do not match";
    } else {
        error.textContent = "";
    }

})