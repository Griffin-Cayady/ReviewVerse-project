document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});

function resetErr() {
    document.getElementById("error-fullname").innerHTML = "";
    document.getElementById("error-username").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-password").innerHTML = "";
    document.getElementById("error-conf-password").innerHTML = "";
    document.getElementById("error-checkbox").innerHTML = "";

}

function submitForm() {
    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let checkbox = document.getElementById("checkbox").value.checked;

    resetErr();

    let valid = true;

    if (fullname=="") {
        document.getElementById("error-fullname").innerHTML = "*Fullname must be filled in";
        return valid = false;
    }
    
    if (username=="") {
        document.getElementById("error-username").innerHTML = "*Username must be filled in";
        return valid = false;
    }

    if (username.length < 3 || username.length > 15) {
        document.getElementById("error-username").innerHTML = "*Username length must between 3-15 char!";
        return valid = false;
    }

    if (email=="") {
        document.getElementById("error-email").innerHTML = "*Email must be filled in";
        return valid = false;
    }

    if (!email.endsWith("@gmail.com")) {
        document.getElementById("error-email").innerHTML = "*Email must ends with '@gmail.com'";
        return valid = false;
    }

    if (password=="") {
        document.getElementById("error-password").innerHTML = "*Password must be filled in";
        return valid = false;
    }

    if (password.length < 7 || password.length > 15) {
        document.getElementById("error-password").innerHTML = "*Password length must between 7-15 char!";
        return valid = false;
    }

    if (confirmPassword=="") {
        document.getElementById("error-conf-password").innerHTML = "*Confirm password must be filled in";
        return valid = false;
    }

    if (confirmPassword != password) {
        document.getElementById("error-conf-password").innerHTML = "*Confirm password must be same as password";
        return valid = false;
    }

    if (!checkbox) {
        document.getElementById("error-checkbox").innerHTML = "*You must agree privacy & policy";
        valid = false;
    }

    return valid;
}