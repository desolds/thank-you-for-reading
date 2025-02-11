document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.querySelector(".confetti");

    function createConfettiPiece() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfettiPiece, 100);
});

/* CSS анімація конфетті */
const style = document.createElement("style");
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);
