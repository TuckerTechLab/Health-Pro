// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/root-variable.scss";
import "../scss/headerFooter.scss";
import "../scss/multiStep.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


// ----------- Form ----------
function startCountdown(durationInSeconds, displayElement) {
    let timer = durationInSeconds;
    let interval = setInterval(function () {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        // Format the countdown (MM:SS)
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayElement.textContent = `${minutes}:${seconds}`;

        // Stop timer and redirect when it reaches 0
        if (timer === 0) {
            clearInterval(interval);
            window.location.href = "/free-quote";
        } else {
            timer--;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    startCountdown(120, countdownElement);
});


document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    startCountdown(120, countdownElement);
});


function scrollToActiveHeader() {
    let activeHeader = document.querySelector(".form-header-active");

    if (activeHeader) {
        activeHeader.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    scrollToActiveHeader(); // Scrolls on page load (optional)
});

