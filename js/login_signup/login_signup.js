;

// SIGN UP FORM


// Creates a new account in the JSON file.
function createAccount() {

    const localStorageKey = "accountData"
    console.log("Create", "Enter")
    // Get the username and password from the form.
    const signupForm = document.querySelector("#signup-form");
    const username = signupForm.querySelector("input[name='username']").value;
    const password = signupForm.querySelector("input[name='password']").value;
     
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    if (!username) {
        alert("Please Sign up");
        return;
    }

    try{
        if((jsonFile)) {
            // Add the new account to the JSON file.
            const userAccount = jsonFile.find(account => account.username === username);
            if(userAccount.username === username) {
                alert("Username Taken");
                return
            }
            jsonFile.push({
                username,
                password,
            });
            window.location.href = "portal.html";
        }
    }catch {}

    // Save the JSON file.
    localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
    console.log("succesful account creation")
    signupForm.querySelector("input[name='password']").value = ""
}


// LOGIN FORM


// Attempts to log the user in.
function login() {
    
    const localStorageKey = "accountData"
    console.log("login", "Enter")
    const loginForm = document.querySelector("#login-form");
    // Get the username and password from the form.
    const username = loginForm.querySelector("input[name='username']").value;
    const password = loginForm.querySelector("input[name='password']").value;
    loginForm.querySelector("input[name='password']").value = ""
    // Get the JSON file.
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];

  try{

    if((jsonFile)) {
        // Find the user's account in the JSON file.
        console.log("accountData", jsonFile )
        const userAccount = jsonFile.find(account => account.username === username);
        // If the user's account doesn't exist, return an error message.

        if (username === "") {
            alert("Please enter login detials.");
            return;
        }
        if (!userAccount) {
            alert("Username or password is incorrect.");
            console.log(userAccount.username, "User doest exist")
            console.log(username)
            return;
        } 
        // If the user's password doesn't match, return an error message.
        if (userAccount.password !== password) {
            alert("Username or password is incorrect.");
            console.log(userAccount.password, "Password doest exist")
            console.log(password)
            return;
        }
    }
        // If the user's login is successful, redirect them to the home page.
        window.location.href = "portal.html";

    } catch{
    }
  

}