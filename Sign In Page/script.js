document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});

function resetErr() {
    document.getElementById("error-username").innerHTML = "";
    document.getElementById("error-password").innerHTML = "";
}

function submitForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    resetErr();

    let valid = true;

    if (username=="") {
        document.getElementById("error-username").innerHTML = "*Username must be filled in";
        return valid = false;
    }

    if (username.length < 3 || username.length > 15) {
        document.getElementById("error-username").innerHTML = "*Username length must between 3-15 char!";
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

}