// login.js - login/logout handling
document.addEventListener("DOMContentLoaded", () => {
const loginBtn = 
document.getElementById("login-btn");
const logoutBtn = 
document.getElementById("logout-btn");
const welcomeUser = 
document.getElementById("welcome-user");

function isLoggedIn() { 
    return localStorage.getItem("isLoggedIn") === "true"; 
}

function updateUI() {
    if (isLoggedIn()) {
        loginBtn.classList.add("d-none");

        logoutBtn.classList.remove("d-none");

        welcomeUser.classList.remove("d-none");
         welcomeUser.textContent = `Hi, $
            {localStorage.getItem("username") ?? 
            "user"}`;
    } else {
        loginBtn?.classList.remove("d-none");
        logoutBtn?.classList.add("d-none");
        welcomeUser?.classList.add("d-none");
    }
}

//Open modal
if (loginBtn){
loginBtn.addEventListener("click", () => {
    const modalEl=
    document.getElementById("loginModal");
    if(window.bootstrap && modalEl) {

    bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
    });
}
//Logout
   if (logoutBtn){
    logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        updateUI();
    });
}

    //Handle login form
    const loginForm =
        document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email =
                document.getElementById("email").value;
            const pass =
                document.getElementById("password").value;

            if (email === "test@test.com" && pass === "1234") {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", email);

                const modalEl =
                    document.getElementById("loginModal");
                if (window.bootstrap && modalEl) {

                    bootstrap.Modal.getInstance(modalEl).hide();
                }
                alert("Login successful!");
                updateUI();
            } else {
                alert("Invalid email or password");
            }
        });
    }
    //Initialize
    updateUI();
});
