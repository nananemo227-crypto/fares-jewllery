document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.querySelector(".nav__toggle");
    const navMenu = document.querySelector(".nav__menu");

    navToggle.addEventListener("click", function () {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
    });

});