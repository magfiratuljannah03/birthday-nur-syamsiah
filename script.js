console.log("Birthday Premium Loaded");

/* =========================
COUNTDOWN
========================= */

const countElement =
document.getElementById("count");

const countdownScreen =
document.getElementById("countdown-screen");

const bgMusic =
document.getElementById("bgMusic");

let counter = 3;

const countdown = setInterval(() => {

    countElement.textContent = counter;

    counter--;

    if(counter < 0){

        clearInterval(countdown);

        countdownScreen.style.opacity = "0";

        setTimeout(() => {

            countdownScreen.style.display = "none";

        },800);

        if(bgMusic){

            bgMusic.play().catch(() => {

                console.log(
                    "Autoplay diblokir browser"
                );

            });

        }

    }

},1000);

/* =========================
ENVELOPE OPEN
========================= */

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

let opened = false;

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {

        envelope.classList.add(
            "move-down"
        );

    },500);

    setTimeout(() => {

        letter.classList.add(
            "show"
        );

        startTyping();

    },1200);

});

/* =========================
TYPEWRITER
========================= */

const message = `
Selamat Ulang Tahun Ade Nur Syamsiah 🎂✨

Semoga selalu diberikan kesehatan,
kebahagiaan, keberkahan, dan
kemudahan dalam setiap langkah.

Semoga semakin rajin belajar,
rajin menulis, dan semakin semangat
mengejar cita-cita yang diimpikan.

Kurangi rasa malasnya,
perbanyak usaha dan doa,
karena masa depan yang cerah
dibangun dari kerja keras hari ini.

Semoga menjadi siswa yang
berprestasi, membanggakan
orang tua, keluarga,
serta guru-guru tercinta.

Tetap menjadi pribadi yang baik,
ceria, dan membawa kebahagiaan
bagi orang-orang di sekitar.

✨ Selamat menikmati hari spesialmu ✨
❤️ Happy Birthday ❤️
`;

const typedMessage =
document.getElementById(
    "typed-message"
);

let index = 0;

function startTyping(){

    function type(){

        if(index < message.length){

            typedMessage.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}

/* =========================
PHOTO SLIDER
========================= */

const photos = [

    "assets/foto1.jpg",
    "assets/foto2.jpg",
    "assets/foto3.jpg",
    "assets/foto4.jpg",
    "assets/foto5.jpg"

];

let currentPhoto = 0;

const slideImage =
document.getElementById(
    "slideImage"
);

setInterval(() => {

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    slideImage.src =
        photos[currentPhoto];

},3500);

/* =========================
BALLOON EFFECT
========================= */

function createBalloon(){

    const balloon =
    document.createElement("div");

    balloon.classList.add(
        "balloon"
    );

    const balloons = [

        "🎈",
        "🎈",
        "🎈",
        "🎈"

    ];

    balloon.innerHTML =
    balloons[
        Math.floor(
            Math.random()
            * balloons.length
        )
    ];

    balloon.style.left =
        Math.random() * 100
        + "vw";

    balloon.style.animationDuration =
        (8 + Math.random()*5)
        + "s";

    document.body.appendChild(
        balloon
    );

    setTimeout(() => {

        balloon.remove();

    },13000);

}

setInterval(
    createBalloon,
    1000
);

/* =========================
SAKURA EFFECT
========================= */

function createSakura(){

    const sakura =
    document.createElement("div");

    sakura.classList.add(
        "sakura"
    );

    sakura.innerHTML = "🌸";

    sakura.style.left =
        Math.random()*100
        + "vw";

    sakura.style.animationDuration =
        (6 + Math.random()*4)
        + "s";

    document.body.appendChild(
        sakura
    );

    setTimeout(() => {

        sakura.remove();

    },10000);

}

setInterval(
    createSakura,
    500
);

/* =========================
GOLD PARTICLES
========================= */

function createGoldParticle(){

    const particle =
    document.createElement("div");

    particle.innerHTML = "✨";

    particle.style.position =
        "fixed";

    particle.style.left =
        Math.random()*100
        + "vw";

    particle.style.top =
        Math.random()*100
        + "vh";

    particle.style.fontSize =
        (10 + Math.random()*20)
        + "px";

    particle.style.opacity =
        ".8";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "1";

    document.body.appendChild(
        particle
    );

    setTimeout(() => {

        particle.remove();

    },4000);

}

setInterval(
    createGoldParticle,
    700
);

/* =========================
POPUP
========================= */

const popup =
document.getElementById(
    "popup"
);

const specialBtn =
document.getElementById(
    "specialBtn"
);

const closePopup =
document.querySelector(
    ".close-popup"
);

specialBtn.addEventListener(
    "click",
    () => {

        popup.style.display =
            "flex";

        megaFireworks();

    }
);

closePopup.addEventListener(
    "click",
    () => {

        popup.style.display =
            "none";

    }
);

window.addEventListener(
    "click",
    (e) => {

        if(e.target === popup){

            popup.style.display =
                "none";

        }

    }
);

/* =========================
FIREWORKS
========================= */

function megaFireworks(){

    for(let i=0;i<150;i++){

        const firework =
        document.createElement(
            "div"
        );

        firework.classList.add(
            "firework"
        );

        const icons = [

            "✨",
            "🎆",
            "🎇",
            "⭐",
            "🌟",
            "💖"

        ];

        firework.innerHTML =
        icons[
            Math.floor(
                Math.random()
                * icons.length
            )
        ];

        firework.style.left =
            Math.random()*100
            + "vw";

        firework.style.top =
            Math.random()*100
            + "vh";

        document.body.appendChild(
            firework
        );

        setTimeout(() => {

            firework.remove();

        },1200);

    }

}

/* =========================
MUSIC FALLBACK
========================= */

document.body.addEventListener(

    "click",

    () => {

        if(bgMusic){

            bgMusic.play()
            .catch(()=>{});

        }

    },

    { once:true }

);