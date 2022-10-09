const loginForm = document.querySelector("#login-form");
const loginUser = document.querySelector("#loginUser");

const HIDDEN_CLASS = "hidden";
const savedUser = localStorage.getItem('userName');

function printLogin(user) {
    loginUser.innerText = `Hello :) ${user}`;
    loginForm.classList.add(HIDDEN_CLASS);
    loginUser.classList.remove(HIDDEN_CLASS);
}

if(savedUser !== null) {
    printLogin(savedUser);
}

function handleSubmitLoginForm(e) {
    e.preventDefault();
    const userName = loginForm.querySelector("input").value;
    localStorage.setItem('userName', userName);
    printLogin(userName);
}

loginForm.addEventListener("submit", handleSubmitLoginForm);