

// SIGN UP FORM


// Creates a new account in the JSON file.
const createAccount = ()=> {

    
    // signupForm.querySelector("input[name='password']").value = ""
}



// LOGIN FORM AND VALIDATION
(() => {
    'use strict';
  
    // Fetch all DOM elements we need 
    const login_forms = document.querySelectorAll('.login-validation');
  
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(login_forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        // Fetch all DOM sign up form elements we need 
        const loginForm = document.querySelector("#login-form");
        const username = loginForm.querySelector("input[name='username']").value;
        const password = loginForm.querySelector("input[name='password']").value;

        document.querySelector(".invalid-user_pass").classList.remove('show')
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return

        }else{}{
          event.preventDefault();

          const localStorageKey = "accountData"
          // ---uncomment to clear data ---
          // JSON.parse(localStorage.clear(localStorageKey))  

          // Get the JSON file.
          const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];

      
          try{

            if((jsonFile)) {
            // Find the user's account in the JSON file.
            console.log("accountData", jsonFile )
            const userAccount = jsonFile.find(account => account.username === username);
            // If the user's account doesn't exist, return an error message.
            if (!userAccount) {
                document.querySelector(".invalid-user_pass").classList.add('show')
                console.log(userAccount.username, "User doest exist")
                console.log(username)
                return;
            } 
            // If the user's password doesn't match, return an error message.
            if (userAccount.password !== password) {

                document.querySelector(".invalid-user_pass").classList.add('show')
                console.log(userAccount.password, "Password doest exist")
                loginForm.querySelector("input[name='password']").value = ""
                return;
            }
            // If the user's login is successful, redirect them to the portal page.
            window.location.href = "portal.html";
      
            }
                
            } catch{
            }
              }}, false);

            });

  
  })();


  // SIGNUP FORM AND VALIDATION
  (() => {
    'use strict';
    const signup_forms = document.querySelectorAll('.signup-validation');
  
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(signup_forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        // Fetch all DOM sign up form elements we need 
        const signupForm = document.querySelector("#signup-form");
        const username = signupForm.querySelector("input[name='username']").value;
        const password = signupForm.querySelector("input[name='password']").value;

        document.querySelector(".invalid-user_taken").classList.remove('show')
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          event.preventDefault();
          console.log("successful enter")

          const localStorageKey = "accountData"
   
          const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];

          try{
              if((jsonFile)) {
                console.log("successful enter 2", jsonFile)
                  // Add the new account to the JSON file.
                  const userAccount = jsonFile.find(account => account.username === username);
                  console.log(userAccount)
                  if(userAccount) {
                      document.querySelector(".invalid-user_taken").classList.add('show')
                      return
                  }
                  if(!username.trim().length) {
                    console.log("no user")
                    return
                  }
                  if(!password.trim().length) {
                    console.log("no pass")
                    return
                  }
                  console.log("pushh")
                  jsonFile.push({
                      username,
                      password,
                  });
                  // Save the JSON file.
                  localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
                  console.log("successful account creation")
                  window.location.href = "portal.html";
                    }
                }catch {}
                



        }
        
      }, false);
    });
  })();

