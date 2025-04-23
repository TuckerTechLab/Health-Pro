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


// ----------- Form ----------
document.addEventListener("DOMContentLoaded", function () {
    const stepsWrapper = document.querySelector(".steps-section-wrapper");
    const disqualifySection = document.querySelector(".disqualify-section");
    const requestCallSection = document.querySelector(".request-call-section");

    const step1Form = document.querySelector(".step1-form");
    const step2Form = document.querySelector(".step2-form");
    const step3Form = document.querySelector(".step3-form");

    const goBackBtns = document.querySelectorAll(".goBackBtn");
    const requestCallGoBack = document.querySelector(".request-call-goBack");

    const requestCallBtn = document.querySelector(".form-request-call-btn");
    const step2Options = document.querySelectorAll(".step2-form-options span");

    const formHeaders = document.querySelectorAll(".form-header-content");
    const formHeaderOuter = document.querySelector(".form-header-outer"); // Header wrapper for scrolling

    // Function to scroll to the next step header
    function scrollToNextHeader(stepIndex) {
        if (window.innerWidth < 992) {
            const nextHeader = formHeaders[stepIndex];

            if (nextHeader) {
                const containerWidth = formHeaderOuter.clientWidth; // Width of the scrollable container
                const targetOffset = nextHeader.offsetLeft - formHeaderOuter.offsetLeft; // Correct offset

                formHeaderOuter.scrollTo({
                    left: targetOffset - containerWidth / 2 + nextHeader.clientWidth / 2, // Center the header
                    behavior: "smooth",
                });
            }
        }
    }

    // Step 1: Handle Radio Button Selection
    document.querySelectorAll("input[name='Quote']").forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.id === "Medicare" || this.id === "Medicaid") {
                // Hide steps and show disqualify section
                stepsWrapper.classList.add("d-none");
                disqualifySection.classList.remove("d-none");
            } else {
                // Move to Step 2 when any other option is selected
                step1Form.classList.add("d-none");
                step2Form.classList.remove("d-none");

                // Update form header styles
                formHeaders[0].classList.add("form-header-complete");
                formHeaders[1].classList.add("form-header-active");

                // Scroll to Step 2 header
                scrollToNextHeader(1);
            }
        });
    });

    // Back to Steps (Show steps-section-wrapper again)
    goBackBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            disqualifySection.classList.add("d-none");
            stepsWrapper.classList.remove("d-none");
        });
    });

    // Step 2 Options (Move to Step 3)
    step2Options.forEach((option) => {
        option.addEventListener("click", function () {
            step2Form.classList.add("d-none");
            step3Form.classList.remove("d-none");

            // Update form header styles
            formHeaders[1].classList.add("form-header-complete");
            formHeaders[2].classList.add("form-header-active");

            // Scroll to Step 3 header
            scrollToNextHeader(2);
        });
    });

    // Request Call Button
    requestCallBtn.addEventListener("click", function () {
        stepsWrapper.classList.add("d-none");
        requestCallSection.classList.remove("d-none");
    });

    // Request Call Go Back
    requestCallGoBack.addEventListener("click", function () {
        requestCallSection.classList.add("d-none");
        stepsWrapper.classList.remove("d-none");
    });
});



