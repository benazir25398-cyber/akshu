
function updateCountdown() {

    const birthday = new Date("November 21, 2026 00:00:00").getTime();

    const now = new Date().getTime();

    const difference = birthday - now;

    if (difference <= 0) {
        document.querySelector(".timer").innerHTML =
            "HAPPIEST BIRTHDAY, AKSHU MAAAA! 🎂💗";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

function showSurprise() {
    const result = document.getElementById("surprise-result");

    result.classList.add("show");

    // Create colourful confetti
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "💗", "🌸", "🎊"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "22px";
        confetti.style.zIndex = "1000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const fall = confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`, opacity: 0 }
            ],
            {
                duration: 2500 + Math.random() * 1500,
                easing: "ease-in"
            }
        );

        fall.onfinish = () => confetti.remove();
    }
}
