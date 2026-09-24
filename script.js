const leftEye = document.querySelector(".eye-left");
const rightEye = document.querySelector(".eye-right");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = 0;
let currentY = 0;

let targetX = 0;
let targetY = 0;


/* =========================================
   MOUSE
========================================= */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    targetX =
        (mouseX / window.innerWidth - 0.5) * 10;

    targetY =
        (mouseY / window.innerHeight - 0.5) * 7;

});


/* =========================================
   SMOOTH PUPIL MOVEMENT
========================================= */

function animateEyes() {

    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;


    leftEye.style.transform =
        `translate(${currentX}px, ${currentY}px)`;


    rightEye.style.transform =
        `translate(${currentX}px, ${currentY}px)`;


    requestAnimationFrame(animateEyes);
}


animateEyes();


/* =========================================
   MOBILE
========================================= */

if (window.matchMedia("(max-width: 800px)").matches) {

    leftEye.style.display = "none";
    rightEye.style.display = "none";

}