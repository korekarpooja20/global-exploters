/* =========================================
   GLOBAL EXPORTERS - MAIN JAVASCRIPT
   ========================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("show");
    }

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


/* ================= CONTACT / ENQUIRY FORM ================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        const formData = new FormData(contactForm);

        const enquiryData = {

            name: formData.get("name"),
            company: formData.get("company"),
            country: formData.get("country"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            product: formData.get("product"),
            quantity: formData.get("quantity"),
            message: formData.get("message")

        };


        /* Disable button */

        if (submitButton) {

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

        }


        try {

            const response = await fetch(
                "https://global-exploters-backend.vercel.app/api/enquiry",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(enquiryData)

                }
            );


            const result = await response.json();


            if (response.ok && result.success) {

                alert(
                    "Thank you for your enquiry!\n\n" +
                    "Your enquiry has been sent successfully.\n" +
                    "Our export team will contact you soon."
                );

                contactForm.reset();

            } else {

                alert(
                    "Sorry, your enquiry could not be sent.\n\n" +
                    (result.message || "Please try again later.")
                );

            }


        } catch (error) {

            console.error("Enquiry error:", error);

            alert(
                "Unable to connect to the server.\n\n" +
                "Please try again later."
            );

        }


        /* Enable button again */

        if (submitButton) {

            submitButton.disabled = false;
            submitButton.textContent = "Send Enquiry";

        }

    });

}
