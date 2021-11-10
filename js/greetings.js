const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    // greeting.innerHTML = "Hello " + userName;
    
    localStorage.setItem(USERNAME_KEY, userName);
    greeting.innerHTML = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreeting(){
    greeting.classList.remove("hidden");
    greeting.innerHTML = `Hello ${savedUserName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting();
}