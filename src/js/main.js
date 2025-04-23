// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/root-variable.scss";
import "../scss/headerFooter.scss";
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


// Import Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import $ from "jquery"; // Ensure jQuery is available

$(document).ready(function () {
    $(".slider").slick({
        dots: false,           // Show navigation dots
        infinite: true,       // Enable infinite scrolling
        speed: 500,           // Animation speed (ms)
        slidesToShow: 6,      // Show 5 images at a time
        slidesToScroll: 3,    // Scroll 1 slide at a time
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 3000,  // Autoplay speed (ms)
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

