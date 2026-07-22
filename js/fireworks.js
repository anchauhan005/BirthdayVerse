// ======================================
// PREMIUM FIREWORKS
// ======================================

const fireCanvas = document.getElementById("fireworks-canvas");

if (fireCanvas) {

    const fireCtx = fireCanvas.getContext("2d");

    fireCanvas.width = window.innerWidth;
    fireCanvas.height = window.innerHeight;

    window.addEventListener("resize", () => {

        fireCanvas.width = window.innerWidth;
        fireCanvas.height = window.innerHeight;

    });

    let rockets = [];
    let particles = [];

    function randomColor() {

        return `hsl(${Math.random() * 360},100%,60%)`;

    }

    // ==========================
    // Launch Rocket
    // ==========================

    window.launchRocket = function () {

        rockets.push({

            x: Math.random() * fireCanvas.width,

            y: fireCanvas.height,

            targetY: Math.random() * (fireCanvas.height / 2),

            color: randomColor(),

            speed: 7 + Math.random() * 3

        });

    };

    // ==========================
    // Explosion
    // ==========================

    function explode(x, y) {

        const color = randomColor();

        for (let i = 0; i < 120; i++) {

            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;

            particles.push({

                x,
                y,

                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,

                life: 100,

                color

            });

        }

    }

    // ==========================
    // Animation
    // ==========================

    function animateFireworks() {

        fireCtx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

        // Rockets

        for (let i = rockets.length - 1; i >= 0; i--) {

            const r = rockets[i];

            r.y -= r.speed;

            fireCtx.beginPath();
            fireCtx.arc(r.x, r.y, 3, 0, Math.PI * 2);

            fireCtx.fillStyle = r.color;
            fireCtx.shadowBlur = 20;
            fireCtx.shadowColor = r.color;

            fireCtx.fill();

            if (r.y <= r.targetY) {

                explode(r.x, r.y);

                rockets.splice(i, 1);

            }

        }

        // Particles

        for (let i = particles.length - 1; i >= 0; i--) {

            const p = particles[i];

            p.x += p.dx;
            p.y += p.dy;

            p.dy += 0.04;

            p.life--;

            fireCtx.beginPath();

            fireCtx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);

            fireCtx.fillStyle = p.color;
            fireCtx.shadowBlur = 15;
            fireCtx.shadowColor = p.color;

            fireCtx.fill();

            if (p.life <= 0) {

                particles.splice(i, 1);

            }

        }

        requestAnimationFrame(animateFireworks);

    }

    animateFireworks();

    // ==========================
    // Gallery -> Letter
    // ==========================

    document.addEventListener("DOMContentLoaded", () => {

        const btn = document.getElementById("fireworks-btn");

        if (!btn) return;

        btn.addEventListener("click", () => {

            playSound("fireworks");
            // Launch fireworks

            for (let i = 0; i < 12; i++) {

                setTimeout(() => {

                    launchRocket();

                }, i * 500);

            }

            // Show letter

            setTimeout(() => {

                document.getElementById("gallery-section").style.display = "none";

                const letter = document.getElementById("letter-section");

                letter.style.display = "flex";

                setTimeout(() => {

                    document.querySelector(".envelope").classList.add("open");

                }, 400);

            }, 7000);

        });

    });

} else {

    console.error("Fireworks canvas not found.");

}