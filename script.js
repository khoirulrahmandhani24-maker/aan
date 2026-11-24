
/* =================================
   1. MENU NAVIGASI
================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Tutup menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Buka menu");
    }

});

// Tutup menu setelah memilih halaman
document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });

});


/* =================================
   2. DARK MODE DAN LIGHT MODE
================================= */

const themeToggle = document.getElementById("themeToggle");

// Ambil tema yang pernah disimpan
const savedTheme = localStorage.getItem("portfolio-theme");

// Terapkan tema saat halaman dibuka
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

// Mengatur ikon tema
function updateThemeIcon() {

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Aktifkan Dark Mode");
        themeToggle.title = "Aktifkan Dark Mode";

    } else {

        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Aktifkan Light Mode");
        themeToggle.title = "Aktifkan Light Mode";

    }

}

// Tampilkan ikon sesuai tema
updateThemeIcon();

// Tombol untuk mengganti tema
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("portfolio-theme", "light");

    } else {

        localStorage.setItem("portfolio-theme", "dark");

    }

    updateThemeIcon();

});


/* =================================
   3. TAHUN OTOMATIS
================================= */

document.querySelectorAll(".year").forEach(element => {

    element.textContent = new Date().getFullYear();

});
