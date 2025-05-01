// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/root-variable.scss";
import "../scss/headerFooter.scss";
import "../scss/miroCommitment.scss";

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


// ----------- Form ----------
document.addEventListener("DOMContentLoaded", function () {
    const step1Form = document.querySelector(".step1-form");
    const step2Form = document.querySelector(".step2-form");
    const step3Form = document.querySelector(".step3-form");
    const radioButtons = document.querySelectorAll(".step1-form-btn-wrapper input[type='radio']");

    const step1Header = document.querySelectorAll(".form-header-content")[0]; // Step 1 header
    const step2Header = document.querySelectorAll(".form-header-content")[1]; // Step 2 header
    const step3Header = document.querySelectorAll(".form-header-content")[2]; // Step 3 header

    const stepFormDiv1 = document.querySelector(".step-form-div-1"); // First part of Step 2
    const stepFormDiv2 = document.querySelector(".step-form-div-2"); // Second part of Step 2
    const noBtn = document.querySelector(".step2-form-options span:first-child"); // "No" button
    const yesBtn = document.querySelector(".step2-form-options span:last-child"); // "Yes" button
    const goBackBtn = document.querySelector(".goBackBtn"); // "Back to Steps" button

    // Handle Step 1 -> Step 2 Transition
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.checked) {
                setTimeout(() => {
                    step1Form.classList.add("d-none");
                    step2Form.classList.remove("d-none");

                    step1Header.classList.remove("form-header-active");
                    step1Header.classList.add("form-header-complete");
                    step2Header.classList.add("form-header-active");
                }, 500)
            }
        });
    });

    // Handle "No" Click -> Show Step 2.2
    noBtn.addEventListener("click", function () {
        stepFormDiv1.classList.add("d-none");
        stepFormDiv2.classList.remove("d-none");
    });

    // Handle "Yes" Click -> Move to Step 3
    yesBtn.addEventListener("click", function () {
        step2Form.classList.add("d-none");
        step3Form.classList.remove("d-none");

        step2Header.classList.remove("form-header-active");
        step2Header.classList.add("form-header-complete");
        step3Header.classList.add("form-header-active");
    });

    // Handle "Back to Steps" Click -> Return to Step 1
    goBackBtn.addEventListener("click", function () {
        step2Form.classList.add("d-none");
        step1Form.classList.remove("d-none");

        step2Header.classList.remove("form-header-active");
        step1Header.classList.remove("form-header-complete");
        step1Header.classList.add("form-header-active");

        stepFormDiv1.classList.remove("d-none");
        stepFormDiv2.classList.add("d-none");
    });
});





