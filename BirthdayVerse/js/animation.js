const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const stars = [];

for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radius:Math.random()*2,

        alpha:Math.random(),

        speed:0.005 + Math.random()*0.02

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.alpha += star.speed;

        if(star.alpha>=1 || star.alpha<=0){

            star.speed *= -1;

        }

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();