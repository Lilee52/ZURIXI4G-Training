const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");
const container = document.querySelector(".hamburger-close-container");


container.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
    hamburger.style.display = "none";
});

