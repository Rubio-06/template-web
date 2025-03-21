// ----- Imports ----- //
import { login} from "./auth/login.js";
import { logout } from "./auth/logout.js"

// ----- Sidebar Logic ----- //
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const main = document.getElementById("main");

sidebarToggle.addEventListener("click", () => {
  sidebarToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});

main.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebarToggle.classList.remove("active");
});

// ----- Login  ----- //
const loginButton = document.getElementById("login_button");

loginButton.addEventListener("click", () => {
    login()
        .then((res) => {
            // Redirect to URL
            window.open(res.url);
        })
        .catch((err) => console.log("error: ", err));
});

// ----- Logout ----- //
const logoutButton = document.getElementById("logout_button");

logoutButton.addEventListener("click", () => {
    logout()
});