/* ================================
   PORTFOLIO JAVASCRIPT
   ================================ */

// Run after the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Current year in footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Simple welcome message
    console.log("Portfolio website loaded successfully!");

});