AOS.init({
    offset: 200,
    duration: 1500
});

// Change navbar style on scroll
$(document).ready(function() {
    $(window).on('scroll', function() {
        var navEl = $('.navbar');
        if ($(window).scrollTop() > 80) {
            navEl.addClass('navbar-scrolled');
        } else {
            navEl.removeClass('navbar-scrolled');
        }
    });
});


// Automatically adjust textarea height based on content
$(document).ready(function() {
    $('.area-text').each(function() {
        $(this).on('input', function() {
            $(this).css('height', '50px');
            $(this).css('height', this.scrollHeight + 'px');
        });
    });
});


// Enable tooltips using plain JavaScript
// document.addEventListener('DOMContentLoaded', function() {
//     var elements = document.querySelectorAll('[data-toggle="tooltip"]');
//     elements.forEach(function(element) {
//         element.addEventListener('mouseover', function() {
//             var title = this.getAttribute('title');
//             var tooltip = document.createElement('div');
//             tooltip.className = 'tooltip';
//             tooltip.textContent = title;
//             var rect = this.getBoundingClientRect();
//             tooltip.style.top = rect.top + 'px';
//             tooltip.style.left = rect.left + 'px';
//             document.body.appendChild(tooltip);
//             this.removeAttribute('title');
//             this.addEventListener('mouseout', function() {
//                 tooltip.remove();
//                 this.setAttribute('title', title);
//             });
//         });
//     });
// });
$(function () { 
    // jQuery Attribute value selector 
    $('[data-toggle="tooltip"]').tooltip(); 
});