// ======================================
// GALLERY CONTROLLER
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const continueBtn = document.getElementById("continue-btn");

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            document.getElementById("gift-section").style.display = "none";
            document.getElementById("gallery-section").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // Image Popup

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            document.getElementById("lightbox").classList.add("show");

            document.getElementById("lightbox-img").src = img.src;

        });

    });

    document.getElementById("close-lightbox").onclick = () => {

        document.getElementById("lightbox").classList.remove("show");

    };

});