// Static username and password
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";


// Get HTML elements
const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");


// LOGIN
loginBtn.addEventListener("click", function () {

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Check static username and password
    if (
        username === VALID_USERNAME &&
        password === VALID_PASSWORD
    ) {

        // Hide login page
        loginPage.classList.add("hidden");

        // Show home page
        homePage.classList.remove("hidden");

    } else {

        alert("Invalid username or password!");

    }

});


// LOGOUT
logoutBtn.addEventListener("click", function () {

    // Hide home page
    homePage.classList.add("hidden");

    // Show login page
    loginPage.classList.remove("hidden");

    // Clear input fields
    usernameInput.value = "";
    passwordInput.value = "";

});