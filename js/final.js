// ======================================
// FINAL SCREEN CONTROLLER
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.querySelector(".envelope");
    const finalSection = document.getElementById("final-section");
    const letterSection = document.getElementById("letter-section");
    const finalName = document.getElementById("final-name");
    const restartBtn = document.getElementById("restart-btn");

    // -------------------------
    // Open Final Screen
    // -------------------------

    if (envelope) {

        envelope.addEventListener("click", () => {

            letterSection.style.display = "none";

            finalSection.style.display = "flex";

            if (typeof birthdayData !== "undefined") {
                finalName.textContent = `❤️ ${birthdayData.name} ❤️`;
            }

            // Launch celebration fireworks
            if (typeof launchRocket === "function") {

                for (let i = 0; i < 20; i++) {

                    setTimeout(() => {

                        launchRocket();

                    }, i * 350);

                }

            }

        });

    }

    // -------------------------
    // Restart Website
    // -------------------------

    if (restartBtn) {

        restartBtn.addEventListener("click", () => {

            location.reload();

        });

    }

});