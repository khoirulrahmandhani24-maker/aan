
// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

// Membaca tema yang tersimpan
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function updateThemeButton() {
    if (!themeToggle) return;

    themeToggle.textContent =
        document.body.classList.contains("light-mode")
            ? "☀ Light"
            : "☾ Dark";
}

updateThemeButton();

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const currentTheme =
            document.body.classList.contains("light-mode")
                ? "light"
                : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);

        updateThemeButton();
    });
}

// =========================
// MENU NAVIGASI HP
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");

        menuToggle.textContent =
            navMenu.classList.contains("show") ? "✕" : "☰";
    });
}

// =========================
// TAHUN FOOTER OTOMATIS
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
