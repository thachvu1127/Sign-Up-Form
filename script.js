const paragraph = document.getElementById("error");
const password = document.getElementById("password").value;
while (password[0] === null) {
    paragraph.textContent = "*Password Required*"
}