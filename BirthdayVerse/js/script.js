const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");
const status = document.getElementById("status");

setTimeout(() => {
    status.innerHTML = "✓ Best Friend Found ❤️";
}, 2000);

setTimeout(() => {
    status.innerHTML = "Launching Birthday Experience...";
}, 3500);

setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "flex";
}, 4500);

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        radius:Math.random()*2,

        alpha:Math.random(),

        speed:Math.random()*0.02

    });

}

function animateStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.alpha+=star.speed;

        if(star.alpha>=1 || star.alpha<=0){

            star.speed*=-1;

        }

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animateStars);

}

animateStars();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});