/*

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
    same mean
    const loginInput = document.querySelector("#login-form input");
    const loginButton = document.querySelector("#login-form button");
    

    function onLoginBtnClick() {
        const username = loginInput.value;
        if(username === ""){
            alert("please write your name");
        }else if(username.length > 15){
            alert("your name is too long");
        }else{
            console.log(loginInput.value);
        }
    }
    
    loginButton.addEventListener("click", onLoginBtnClick);
    

*/
/*
const link = document.querySelector("a");
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);

}
link.addEventListener("click", handleLinkClick);
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}




const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(saveUsername);
}

