// Star field effect for background animation
document.addEventListener("DOMContentLoaded", function () {
    let starContainer = document.createElement("div");
    starContainer.classList.add("star-field");
    document.body.appendChild(starContainer);

    function createStars() {
        for (let i = 0; i < 100; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            starContainer.appendChild(star);
        }
    }

    createStars();
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Star field effect for background animation
document.addEventListener("DOMContentLoaded", function () {
    let starContainer = document.createElement("div");
    starContainer.classList.add("star-field");
    document.body.appendChild(starContainer);

    function createStars() {
        for (let i = 0; i < 200; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            // Random positions for stars
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            // Random sizes and animation delays for a dynamic effect
            star.style.width = `${Math.random() * 3 + 1}px`; // Size between 1px and 4px
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 5}s`; // Random delay for each star

            starContainer.appendChild(star);
        }
    }

    createStars();
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
