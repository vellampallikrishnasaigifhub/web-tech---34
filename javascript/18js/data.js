function validateData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //alert(email, password)
    if (email == "" || email == null) {
        document.getElementById('emailmsg').innerHTML = "enter the email"
    }
    if (password == "" || password == null) {
        document.getElementById('passmsg').innerHTML = "enter the password"
    }
    if (password.lengh< 5) {
        document.getElementById('passmsg').innerHTML = "enter the password min 5 letters"
    }
    return false
}