
let input_email = document.getElementById("email");
let input_submit = document.getElementById("submit");
let form_span = document.getElementById("span");
let email = "";

function validaEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

input_email.addEventListener("input", (e) => {
    email = e.target.value;
    console.log(email)
})

input_submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validaEmail(email)) {
        if (window.screen.width < 550) {
            input_submit.style.margin = "1.5rem 0 0 0";
        }
        form_span.style.opacity = 1;
        input_email.style.border = "1px solid red";
    } else {
        if (window.screen.width < 550) {
            input_submit.style.margin = "0 0 0 0";
        }
        form_span.style.opacity = 0;
        input_email.style.border = "1px solid green";
    }
})