// ======================================
// FLOATING PETALS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    function createPetal() {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (6 + Math.random() * 5) + "s";

        document.body.appendChild(petal);

        petal.addEventListener("animationend", () => {

            petal.remove();

        });

    }

    setInterval(createPetal, 1800);

});