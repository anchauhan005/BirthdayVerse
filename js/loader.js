const loadingText = document.getElementById("loading-text");
const loadingStatus = document.getElementById("loading-status");
const progressBar = document.getElementById("progress-bar");

const loadingScreen = document.getElementById("loading-screen");
const app = document.getElementById("app");

let progress = 0;

const messages = [
    "Initializing BirthdayVerse...",
    "Loading Memories...",
    "Finding Best Friend...",
    "Preparing Surprise...",
    "Almost Ready..."
];

let messageIndex = 0;

const interval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if(progress % 20 === 0 && messageIndex < messages.length){

        loadingText.innerText = messages[messageIndex];

        messageIndex++;

    }

    loadingStatus.innerText = progress + "%";

    if(progress >= 100){

        clearInterval(interval);

        loadingStatus.innerHTML = "Welcome ❤️";

        setTimeout(()=>{

            loadingScreen.style.display="none";

            app.style.display="flex";

            document.getElementById("friend-name").innerHTML =
                "❤️ " + birthdayData.name + " ❤️";

        },1000);

    }

},40);

const startBtn = document.getElementById("start-btn");
const hero = document.querySelector(".hero");
const giftSection = document.getElementById("gift-section");

startBtn.addEventListener("click", () => {

    hero.style.display = "none";

    giftSection.classList.remove("hidden");

});

