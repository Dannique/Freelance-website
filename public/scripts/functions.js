AOS.init({
  offset: 200,
  duration: 1500,
});

// Change navbar style on scroll
$(document).ready(function () {
  const $navbar = $(".navbar");
  const $navbarToggle = $(".navbar-toggler");
  const $navbarCollapse = $(".navbar-collapse");
  const $navLinks = $(".nav-link");

  // Function to toggle navbar-scrolled class based on scroll position
  const updateNavbarClass = () => {
    $navbar.toggleClass("navbar-scrolled", $(window).scrollTop() > 80);
  };

  // Function to close the navbar
  const closeNavbar = () => $navbarCollapse.removeClass("show");

  // Initialize on page load
  updateNavbarClass();

  // Event listeners
  $(window).on("scroll", updateNavbarClass);
  $navLinks.on("click", closeNavbar);
  $(document).on("click", (e) => {
    if (!$navbarToggle.is(e.target) && !$navbarCollapse.has(e.target).length) {
      closeNavbar();
    }
  });

  // Auto-adjust textarea height
  $(".area-text").on("input", function () {
    $(this)
      .css("height", "50px")
      .css("height", this.scrollHeight + "px");
  });
});

//FORM

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("validSend");
  const failedMessage = document.getElementById("invalidSend");
  let isSubmitted = false; // Flag to track if form has been submitted

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission
    event.stopPropagation();

    isSubmitted = true; // Set the flag to true on form submission attempt

    // Reset messages
    successMessage.classList.add("d-none");
    failedMessage.classList.add("d-none");

    // Perform Bootstrap-style validation
    if (!form.checkValidity()) {
      form.classList.add("was-validated"); // Add validation styles
      return; // Stop if validation fails
    }

    // Gather form data
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
      // Send form data via fetch
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        // Show success message
        successMessage.classList.remove("d-none");
        successMessage.classList.add("d-block");

        // Reset the form and validation state
        form.reset();
        const inputs = form.querySelectorAll(".form-control");
        inputs.forEach((input) => {
          input.classList.remove("is-valid", "is-invalid");
        });
        form.classList.remove("was-validated");
        isSubmitted = false; // Reset the flag after successful submission
      } else {
        // Show failure message
        failedMessage.classList.remove("d-none");
        failedMessage.classList.add("d-block");
      }
    } catch (error) {
      // Handle fetch/network error
      failedMessage.classList.remove("d-none");
      failedMessage.classList.add("d-block");
      console.error("Error:", error);
    }
  });

  // Add real-time validation for valid inputs only
  form.addEventListener("input", (event) => {
    const target = event.target;

    // Show valid state only if input is valid
    if (target.validity.valid) {
      target.classList.remove("is-invalid");
      target.classList.add("is-valid");
    }

    // Show invalid state only after submission attempt
    if (isSubmitted && !target.validity.valid) {
      target.classList.remove("is-valid");
      target.classList.add("is-invalid");
    }
  });
});
