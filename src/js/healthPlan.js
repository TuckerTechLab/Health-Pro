// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/root-variable.scss";
import "../scss/headerFooter.scss";
import "../scss/healthPlan.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


// Import Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import $ from "jquery"; // Ensure jQuery is available

// ------ Hero Section Input ------
document.getElementById("zipCode").addEventListener("input", function () {
    let maxLength = 10;
    let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > maxLength) {
        value = value.slice(0, maxLength); // Enforce max length
    }

    this.value = value; // Update input field
});

document.getElementById("health-plan-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form reload

    let zipCodeInput = document.getElementById("zipCode");

    // If the input is empty or doesn't meet the required length, alert user
    if (zipCodeInput.value.length === 0) {
        alert("Please enter a Zip Code.");
        return;
    }

    zipCodeInput.value = '';

    // Navigate to /free-quote
    window.location.href = '/free-quote';
});

// -------- Slider -------
$(document).ready(function () {
    $(".slider").slick({
        dots: false,           // Show navigation dots
        infinite: true,       // Enable infinite scrolling
        speed: 500,           // Animation speed (ms)
        slidesToShow: 6,      // Show 5 images at a time
        slidesToScroll: 3,    // Scroll 1 slide at a time
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 2000,  // Autoplay speed (ms)
        arrows: false,         // Show next/prev arrows
        adaptiveHeight: true, // Adjust height dynamically
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Small screens
                settings: {
                    slidesToShow: 2.02,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


