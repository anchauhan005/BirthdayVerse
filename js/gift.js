console.log("gift.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const gift = document.getElementById("gift-box");
    const wrapper = document.getElementById("gift-wrapper");
    const card = document.getElementById("birthday-card");
    const cardName = document.getElementById("card-name");

    let opened = false;

    gift.addEventListener("click", () => {

        if(opened) return;
        opened = true;

        // 🔊 Play click sound
        playSound("click");

        wrapper.classList.remove("jump");
        void wrapper.offsetWidth;
        wrapper.classList.add("jump");

        setTimeout(() => {

            // 🎁 Gift opening sound
            playSound("gift");

            gift.classList.add("open");

        }, 500);

        setTimeout(() => {

            createSparkles();

            card.classList.add("show");

            typeWriter();

            startHearts();

            startBalloons();

            if (typeof birthdayData !== "undefined") {
            cardName.textContent = `❤️ ${birthdayData.name} (${birthdayData.nickname}) ❤️`;
            }

            createConfetti();

            // 🎈 Pop sound for confetti
            playSound("pop");

            playMusic();

        },1300);

    });

});
