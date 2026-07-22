/* -----------------------
   Sparkles
----------------------- */

function createSparkles(){

    const section = document.getElementById("gift-section");

    for(let i=0;i<60;i++){

        const s = document.createElement("span");

        s.className="sparkle";

        s.style.left=(50+(Math.random()*20-10))+"%";
        s.style.top=(50+(Math.random()*20-10))+"%";

        s.style.setProperty("--x",(Math.random()*400-200)+"px");
        s.style.setProperty("--y",(Math.random()*-350)+"px");

        section.appendChild(s);

        setTimeout(()=>s.remove(),1800);

    }

}


/* -----------------------
   Confetti
----------------------- */

function createConfetti(){

    const colors=[
        "#ff4d6d",
        "#ffd60a",
        "#4cc9f0",
        "#80ed99",
        "#c77dff"
    ];

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";
        c.style.background=colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDelay=(Math.random()*0.8)+"s";

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),5000);

    }

}


/* -----------------------------
   FLOATING HEARTS
------------------------------ */

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*90+"%";
        heart.style.bottom="0";

        document.getElementById("gift-section").appendChild(heart);

        setTimeout(()=>heart.remove(),6000);

    },400);

}


/* -----------------------------
   BALLOONS
------------------------------ */

const balloonColors=[
"#ff4d6d",
"#4cc9f0",
"#ffd60a",
"#80ed99",
"#c77dff"
];

function startBalloons(){

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*95+"%";

        balloon.style.background=
        balloonColors[Math.floor(Math.random()*balloonColors.length)];

        balloon.style.bottom="-120px";

        document.getElementById("gift-section").appendChild(balloon);

        setTimeout(()=>balloon.remove(),12000);

    },1200);

}