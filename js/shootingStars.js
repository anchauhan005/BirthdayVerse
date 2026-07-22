// ======================================
// SHOOTING STARS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const sky = document.getElementById("sky");

    if (!sky) return;

    function createShootingStar() {

        const star = document.createElement("div");

        star.className = "shooting-star";

        star.style.top = Math.random() * 40 + "%";
        star.style.left = "-150px";

        star.style.animationDuration =
            (1 + Math.random()).toFixed(1) + "s";

        document.body.appendChild(star);

        star.addEventListener("animationend", () => {

            star.remove();

        });

    }

    setInterval(createShootingStar, 5000);

});