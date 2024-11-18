AOS.init({
  offset: 200,
  duration: 1500,
});

// Change navbar style on scroll
$(document).ready(function () {
  $(window).on("scroll", function () {
    var navEl = $(".navbar");
    if ($(window).scrollTop() > 80) {
      navEl.addClass("navbar-scrolled");
    } else {
      navEl.removeClass("navbar-scrolled");
    }
  });
});

$(document).ready(function () {
  // Get the navbar toggle button
  const $navbarToggle = $(".navbar-toggler");

  // Get the navbar collapse element
  const $navbarCollapse = $(".navbar-collapse");

  // Get all the nav links
  const $navLinks = $(".nav-link");

  // Function to close the collapsed navbar
  function closeNavbar() {
    $navbarCollapse.removeClass("show");
  }

  // Add click event listener to each nav link to close the navbar when clicked
  $navLinks.on("click", function () {
    closeNavbar();
  });

  // Add click event listener to close the navbar when clicked outside the navbar
  $(document).on("click", function (event) {
    const $isClickInsideNavbar =
      $navbarToggle.is(event.target) ||
      $navbarCollapse.has(event.target).length > 0;
    if (!$isClickInsideNavbar) {
      closeNavbar();
    }
  });
});

// adjust textarea height based on content
$(document).ready(function () {
  $(".area-text").each(function () {
    $(this).on("input", function () {
      $(this).css("height", "50px");
      $(this).css("height", this.scrollHeight + "px");
    });
  });
});

// FORM
