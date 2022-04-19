let loginForm = document.getElementById("login-form");
if(loginForm) = await addEventListener('submit', login);

let name = 
let pswd = 

function login() {

}

const users  user.getUsers

async function postData = (url = '',)

postData("users/login", {username: name, password: pswd})
.then((data) > {
    if(!data.message) {
        window.location.href  "bmi.html"
    }
})

.catch(err)