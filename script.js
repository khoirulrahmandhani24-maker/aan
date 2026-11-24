
// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// TUTUP MENU SETELAH DIKLIK
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
    new Date().getFullYear();

// ANIMASI SAAT SCROLL
const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .info-box, .skill-card, .project-card, .contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// NAVBAR ACTIVE
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
