document.addEventListener("DOMContentLoaded", function() {
    const passwordInp = document.getElementById("password");
    const passInfo = document.querySelector(".validate");
    const passSpecial = document.querySelector(".special");

    passwordInp.addEventListener("input", function() {
        const inputLength = passwordInp.value.length;
        passInfo.style.color = inputLength >= 8 ? "green" : "red";

        const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(passwordInp.value);
        if (hasSpecialCharacters) {
            passSpecial.style.color = "green";
        } else {
            passSpecial.style.color = "red";
        }
    });
});

