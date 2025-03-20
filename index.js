const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
    console.log("click")
    sidebarToggle.classList.toggle("active");
    sidebar.classList.toggle("active")
});