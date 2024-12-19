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
  const submitButton = document.getElementById("formBtn");
  const successMessage = document.getElementById("validSend");
  const failedMessage = document.getElementById("invalidSend");
  const loadingSpinner = document.getElementById("loadingSpinner");
  let isSubmitted = false; // Track form submission state

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Reset messages and show spinner
    successMessage.classList.add("d-none");
    failedMessage.classList.add("d-none");
    loadingSpinner.classList.remove("d-none");
    submitButton.disabled = true;

    // validation
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      loadingSpinner.classList.add("d-none");
      submitButton.disabled = false;
      return;
    }

    // Gather form data
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        successMessage.classList.remove("d-none");
        successMessage.classList.add("d-block");
        form.reset();
        resetValidation(form); // Reset validation state
      } else {
        failedMessage.classList.remove("d-none");
        failedMessage.classList.add("d-block");
      }
    } catch (error) {
      failedMessage.classList.remove("d-none");
      failedMessage.classList.add("d-block");
      console.error("Error:", error);
    } finally {
      // Hide spinner and re-enable button
      loadingSpinner.classList.add("d-none");
      submitButton.disabled = false;
    }
  });

  // Real-time validation
  form.addEventListener("input", (event) => {
    const target = event.target;

    if (target.validity.valid) {
      target.classList.remove("is-invalid");
      target.classList.add("is-valid");
    } else if (isSubmitted) {
      target.classList.remove("is-valid");
      target.classList.add("is-invalid");
    }
  });

  // Helper function to reset validation state
  const resetValidation = (form) => {
    const inputs = form.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      input.classList.remove("is-valid", "is-invalid");
    });
    form.classList.remove("was-validated");
    isSubmitted = false;
  };

  //NAVBAR
  const dropdown = document.querySelector("#languageDropdown");
  const toggleDropDirection = () => {
    if (window.innerWidth <= 992) {
      // For lg and smaller, make it a dropup
      dropdown.classList.add("dropup");
      dropdown.classList.remove("dropdown");
    } else {
      // For larger screens, make it a dropdown
      dropdown.classList.add("dropdown");
      dropdown.classList.remove("dropup");
    }
  };

  // Run the function on page load
  toggleDropDirection();

  // Add event listener for window resize
  window.addEventListener("resize", toggleDropDirection);
});
