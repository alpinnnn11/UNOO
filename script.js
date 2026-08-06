// =====================================
// UNO INVITE
// PART 1
// =====================================

const loader=document.getElementById("loader");

const mainPage=document.getElementById("mainPage");

const page2=document.getElementById("page2");

const successPage=document.getElementById("successPage");

const transition=document.getElementById("transition");

const yesBtn=document.getElementById("yesBtn");

const noBtn=document.getElementById("noBtn");

const readyBtn=document.getElementById("playUno");

const message=document.getElementById("message");

const cursor=document.querySelector(".cursor-light");

const musicBtn=document.getElementById("musicToggle");

const confettiContainer=document.getElementById("confetti-container");

const rippleContainer=document.getElementById("ripple-container");

let scale=1;

const textList=[

"Yakin nggak mau satu ronde?",

"Cuma sebentar kok 😄",

"Lagi seru nih.",

"Ayo gas dulu.",

"Nanti keburu ditinggal lobby.",

"UNO udah nunggu 😎",

"Klik yang kiri aja."

];

// ============================
// LOADER
// ============================

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.remove();

            },800);

        },2500);

    }

});

// ============================
// CURSOR LIGHT
// ============================

document.addEventListener("mousemove",(e)=>{

if(!cursor) return;

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ============================
// RIPPLE
// ============================

document.addEventListener("click",(e)=>{

if(!rippleContainer) return;

const ripple=document.createElement("div");

ripple.className="ripple";

ripple.style.left=e.clientX+"px";

ripple.style.top=e.clientY+"px";

rippleContainer.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},800);

});

// =====================================
// NO BUTTON
// =====================================

if(noBtn){

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("click",moveNoButton);

}

function moveNoButton(){

    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 30;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    scale += 0.08;
    yesBtn.style.transform = `scale(${scale})`;

    message.textContent =
        textList[Math.floor(Math.random() * textList.length)];

}

// =====================================
// YES BUTTON
// =====================================

yesBtn.addEventListener("click",()=>{
    if (bgMusic) {
    bgMusic.volume = 0.3;
    bgMusic.play();
    musicOn = true;
    if (musicBtn) musicBtn.innerHTML = "🔊";
}

createConfetti();

transition.classList.add("show");

setTimeout(()=>{

mainPage.style.display="none";

transition.classList.remove("show");

page2.classList.add("show");

},1800);

});

// =====================================
// PLAY BUTTON
// =====================================

if(readyBtn){

readyBtn.addEventListener("click",()=>{

setTimeout(()=>{

page2.classList.remove("show");

successPage.classList.add("show");

createConfetti();

},500);

});

}

// =====================================
// CONFETTI
// =====================================

function createConfetti(){

if(!confettiContainer) return;

const colors=[

"#5EA2FF",

"#FFD166",

"#06B6D4",

"#8B5CF6",

"#22C55E",

"#FF6B6B"

];

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=

colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDuration=

(2+Math.random()*3)+"s";

confetti.style.transform=

`rotate(${Math.random()*360}deg)`;

confettiContainer.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

}

// =====================================
// MUSIC CONTROL
// =====================================

const bgMusic=document.getElementById("bgMusic");

let musicOn=false;


if(musicBtn){

musicBtn.addEventListener("click",()=>{


if(!bgMusic) return;


if(musicOn){

bgMusic.pause();

musicBtn.innerHTML="🔇";

musicOn=false;


}else{


bgMusic.volume=.3;

bgMusic.play();

musicBtn.innerHTML="🔊";

musicOn=true;


}


});


}



// =====================================
// SOUND EFFECT
// =====================================

const clickSound=document.getElementById("clickSound");

const successSound=document.getElementById("successSound");


function playClick(){

if(!clickSound) return;

clickSound.currentTime=0;

clickSound.play();

}



yesBtn.addEventListener("click",()=>{

playClick();

});



noBtn.addEventListener("click",()=>{

playClick();

});



if(readyBtn){

readyBtn.addEventListener("click",()=>{


if(successSound){

successSound.currentTime=0;

successSound.play();

}


});

}



// =====================================
// KEYBOARD CONTROL
// =====================================

document.addEventListener("keydown",(e)=>{


if(e.key==="Enter"){

yesBtn.click();

}


if(e.key==="Escape"){

noBtn.click();

}


});



// =====================================
// CARD 3D EFFECT
// =====================================

const cards=document.querySelectorAll(".glass-card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();


const x=e.clientX-rect.left;

const y=e.clientY-rect.top;


const rotateX=

((y/rect.height)-0.5)*-12;


const rotateY=

((x/rect.width)-0.5)*12;



card.style.transform=

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";



});



});



// =====================================
// AUTO PARTICLES
// =====================================

const particles=document.getElementById("particles");


if(particles){


for(let i=0;i<70;i++){


const p=document.createElement("span");


p.className="particle";


p.style.left=

Math.random()*100+"%";


p.style.animationDuration=

(5+Math.random()*8)+"s";


p.style.animationDelay=

Math.random()*5+"s";


particles.appendChild(p);



}


}

// =====================================
// SCRIPT PART 4
// FINAL POLISH
// =====================================


// ============================
// FIX NO BUTTON POSITION
// ============================

window.addEventListener("resize",()=>{

    if(noBtn){

        noBtn.style.transform="translate(0,0)";

    }

});


// ============================
// SMOOTH PAGE ENTER
// ============================

function showPage(element){

    if(!element) return;

    element.classList.add("show");

}


// ============================
// RESET BUTTON SCALE
// ============================

function resetYesButton(){

    scale=1;

    if(yesBtn){

        yesBtn.style.transform="scale(1)";

    }

}


// ============================
// DOUBLE CLICK EFFECT
// ============================

if(yesBtn){

yesBtn.addEventListener("dblclick",()=>{

    createConfetti();

    message.innerHTML=
    "🔥 Gaskeun, meja UNO sudah siap!";

});

}



// ============================
// HOVER MESSAGE
// ============================

if(yesBtn){

yesBtn.addEventListener("mouseenter",()=>{

    message.innerHTML=
    "YESS PENCET";

});

}


if(noBtn){

noBtn.addEventListener("mouseenter",()=>{

    message.innerHTML=
    "Eittss ga kena";

});

}



// ============================
// STOP RIGHT CLICK
// ============================

document.addEventListener(
"contextmenu",
(e)=>{

e.preventDefault();

});



// ============================
// CONSOLE CLEAN
// ============================

console.log(
"%c🎮 UNO Invitation Loaded Successfully",
"color:#5EA2FF;font-size:18px;font-weight:bold;"
);

console.log(
"%cHave fun playing UNO!",
"color:#FFD166;font-size:14px;"
);

setTimeout(()=>{

    const loaderFix = document.getElementById("loader");

    if(loaderFix){

        loaderFix.style.display="none";

    }

},3000);

const playUno = document.getElementById("playUno");

if (playUno) {

    playUno.addEventListener("click", function (e) {

        e.preventDefault();

        const ua = navigator.userAgent.toLowerCase();

        // Android
        if (/android/.test(ua)) {
            window.location.href =
                "https://play.google.com/store/apps/details?id=com.matteljv.uno";
        }

        // iPhone / iPad
        else if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href =
                "https://apps.apple.com/app/uno/id1344700142";
        }

        // Laptop / PC
        else {
            window.open(
                "https://www.letsplayuno.com/",
                "_blank"
            );
        }

    });

}