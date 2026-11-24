
/* =================================
   1. PENGATURAN DASAR DAN TEMA
================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

:root {
    --bg: #080d18;
    --card: #101a2d;
    --blue: #168cff;
    --light: #53b5ff;
    --white: #ffffff;
    --gray: #a6b2c5;
    --header: rgba(8, 13, 24, 0.96);
    --footer: #050912;
    --border: #1b3453;
    --section: #0b1424;
}

body.light-mode {
    --bg: #f3f7fc;
    --card: #ffffff;
    --blue: #0878df;
    --light: #0869c2;
    --white: #172438;
    --gray: #526176;
    --header: rgba(255, 255, 255, 0.96);
    --footer: #e5edf7;
    --border: #d5e0ed;
    --section: #eaf1fa;
}

body {
    font-family: Arial, sans-serif;
    background: var(--bg);
    color: var(--white);
    min-height: 100vh;
    transition: background .3s, color .3s;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

/* =================================
   2. NAVBAR
================================= */

header {
    background: var(--header);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(12px);
}

.navbar {
    max-width: 1150px;
    margin: auto;
    padding: 18px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--white);
}

.logo span {
    color: var(--blue);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
}

.nav-menu a {
    color: var(--gray);
    font-size: 14px;
    transition: .3s;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--light);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.theme-toggle,
.menu-toggle {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: var(--card);
    color: var(--white);
    font-size: 19px;
    cursor: pointer;
    transition: .3s;
}

.theme-toggle:hover,
.menu-toggle:hover {
    background: var(--blue);
    transform: translateY(-2px);
}

.menu-toggle {
    display: none;
}

/* =================================
   3. HALAMAN BERANDA
================================= */

.hero {
    max-width: 1150px;
    min-height: 85vh;
    margin: auto;
    padding: 70px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.hero-content {
    max-width: 650px;
    animation: slideLeft .8s ease;
}

.intro {
    color: var(--light);
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(40px, 6vw, 65px);
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero h1 span {
    color: var(--blue);
}

.hero h2 {
    font-size: 20px;
    color: var(--light);
    margin-bottom: 20px;
}

.description {
    color: var(--gray);
    line-height: 1.9;
    font-size: 15px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 13px 23px;
    border-radius: 7px;
    font-size: 14px;
    transition: .3s;
}

.primary {
    background: var(--blue);
    color: #ffffff;
}

.secondary {
    border: 1px solid var(--blue);
    color: var(--light);
}

.btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px #168cff33;
}

.hero-image {
    width: 320px;
    height: 380px;
    flex-shrink: 0;
    border: 3px solid var(--blue);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 0 35px #168cff44;
    animation: slideRight .8s ease;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* =================================
   4. HALAMAN KEAHLIAN DAN KONTAK
================================= */

.page-container {
    max-width: 1150px;
    min-height: 78vh;
    margin: auto;
    padding: 75px 25px;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title > p:first-child {
    color: var(--light);
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 18px;
}

.section-title h1 {
    font-size: 42px;
    margin-bottom: 15px;
}

.section-title h1 span {
    color: var(--blue);
}

.subtitle {
    color: var(--gray);
    font-size: 14px;
    line-height: 1.8;
}

/* =================================
   5. KARTU KEAHLIAN
================================= */

.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.skill-card {
    background: var(--card);
    border: 1px solid var(--border);
    padding: 30px;
    border-radius: 15px;
    transition: .3s;
}

.skill-card:hover {
    transform: translateY(-8px);
    border-color: var(--blue);
    box-shadow: 0 10px 25px #168cff22;
}

.skill-icon {
    font-size: 35px;
    margin-bottom: 20px;
}

.skill-card h3 {
    color: var(--light);
    margin-bottom: 12px;
    font-size: 20px;
}

.skill-card p {
    color: var(--gray);
    line-height: 1.8;
    font-size: 14px;
}

/* =================================
   6. KARTU KONTAK
================================= */

.contact-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.contact-card {
    text-align: center;
    background: var(--card);
    border: 1px solid var(--border);
    padding: 30px 15px;
    border-radius: 15px;
    color: var(--white);
    transition: .3s;
}

.contact-card:hover {
    transform: translateY(-8px);
    border-color: var(--blue);
    box-shadow: 0 10px 25px #168cff22;
}

.contact-icon {
    font-size: 38px;
    margin-bottom: 15px;
}

.contact-card h3 {
    color: var(--light);
    margin-bottom: 10px;
}

.contact-card p {
    color: var(--gray);
    font-size: 13px;
    overflow-wrap: anywhere;
}

.contact-message {
    margin-top: 35px;
    padding: 30px;
    text-align: center;
    border-radius: 15px;
    background: var(--card);
    border: 1px solid var(--border);
}

.contact-message h2 {
    color: var(--light);
    margin-bottom: 12px;
}

.contact-message p {
    color: var(--gray);
    line-height: 1.8;
    font-size: 14px;
}

.bottom-button {
    text-align: center;
    margin-top: 35px;
}

/* =================================
   7. FOOTER
================================= */

footer {
    background: var(--footer);
    padding: 25px;
    text-align: center;
    color: var(--gray);
    font-size: 13px;
    border-top: 1px solid var(--border);
}

/* =================================
   8. ANIMASI
================================= */

@keyframes slideLeft {
    from {
        opacity: 0;
        transform: translateX(-35px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(35px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* =================================
   9. RESPONSIVE TABLET
================================= */

@media (max-width: 850px) {

    .hero {
        flex-direction: column-reverse;
        text-align: center;
        padding-top: 55px;
    }

    .hero-image {
        width: 270px;
        height: 310px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .skills-container,
    .contact-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* =================================
   10. RESPONSIVE HP
================================= */

@media (max-width: 600px) {

    .navbar {
        padding: 15px 20px;
    }

    .menu-toggle {
        display: block;
    }

    .nav-menu {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 10px;
        background: var(--card);
        border-bottom: 1px solid var(--border);
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-menu li {
        padding: 15px;
    }

    .hero {
        padding: 50px 20px;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero h2 {
        font-size: 17px;
    }

    .hero-image {
        width: 230px;
        height: 270px;
    }

    .page-container {
        padding: 55px 20px;
    }

    .section-title h1 {
        font-size: 34px;
    }

    .skills-container,
    .contact-container {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        gap: 10px;
    }
}
