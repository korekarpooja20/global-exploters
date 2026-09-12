/* =========================================
   GLOBAL EXPORTERS - MAIN JAVASCRIPT
   ========================================= */


/* Mobile Menu */

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("show");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar");

        navbar.classList.remove("show");

    });

});


/* Contact Form */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for your enquiry!\n\n" +
            "Our export team will contact you soon."
        );

        contactForm.reset();

    });

}
