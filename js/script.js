document.addEventListener("DOMContentLoaded", () => {

```
/* =========================================
   ELEMENTS
========================================== */

const header = document.querySelector(".header");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navItems = document.querySelectorAll(".nav-links a");

/* =========================================
   MOBILE MENU
========================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after clicking a link */

    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================
   HEADER ON SCROLL
========================================== */

const handleScroll = () => {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

};

window.addEventListener("scroll", handleScroll);

handleScroll();


/* =========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("main section[id]");

const updateActiveNavigation = () => {

    const scrollPosition = window.scrollY + 150;

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach((link) => {

        const href = link.getAttribute("href");

        link.classList.remove("active");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

};

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================== */

const animatedElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, " +
    ".experience-card, .education-card, " +
    ".certification-card, .about-highlight"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   PROJECT CARD STAGGER ANIMATION
========================================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =========================================
   SKILL CARD STAGGER ANIMATION
========================================== */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =========================================
   SMOOTH SCROLL
========================================== */

navItems.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   CLOSE MOBILE MENU WITH ESC
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (
            menuToggle &&
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    }

});


/* =========================================
   TERMINAL TYPING EFFECT
========================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    let visible = true;

    setInterval(() => {

        visible = !visible;

        cursor.style.opacity = visible ? "1" : "0";

    }, 500);

}


/* =========================================
   CURRENT YEAR
========================================== */

const yearElement = document.querySelector(".footer-copy");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Hiba Nadir. All rights reserved.`;

}
```

});
