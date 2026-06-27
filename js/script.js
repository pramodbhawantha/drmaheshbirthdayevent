// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },2500);

});


// ==========================
// COUNTDOWN
// ==========================

const eventDate = new Date("July 14, 2026 12:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

const d=document.getElementById("days");
const h=document.getElementById("hours");
const m=document.getElementById("minutes");
const s=document.getElementById("seconds");

if(d){

d.innerHTML=days;
h.innerHTML=hours;
m.innerHTML=minutes;
s.innerHTML=seconds;

}

},1000);


// ==========================
// GOLD PARTICLES
// ==========================

for(let i=0;i<35;i++){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=(8+Math.random()*8)+"s";

particle.style.animationDelay=(Math.random()*8)+"s";

particle.style.opacity=Math.random();

document.body.appendChild(particle);

}


// ==========================
// ADD TO CALENDAR
// ==========================

const calendarBtn=document.getElementById("calendarBtn");

if(calendarBtn){

calendarBtn.addEventListener("click",(e)=>{

e.preventDefault();

const start="20260714T120000";

const end="20260714T180000";

const url=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celebrating+Dr.+Mahesh+Weerakoon&dates=${start}/${end}&location=Clover+Banquets+%26+Resort`;

window.open(url,"_blank");

});

}


// ==========================
// RSVP GOOGLE SHEETS
// ==========================

const form=document.getElementById("rsvpForm");

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const submitBtn=form.querySelector("button");

submitBtn.disabled=true;

submitBtn.innerHTML="Submitting...";

const data={

name:document.getElementById("name").value,

phone:document.getElementById("phone").value,

guests:document.getElementById("guests").value,

attendance:document.getElementById("attendance").value,

message:document.getElementById("message").value

};

try{

const response=await fetch("https://script.google.com/macros/s/AKfycbxQoOqPXKJ3Bzo8Qdk-GnINnepjvdYk1G0exWTX2Hk9R6CVdZg_YurdCnH2bd_z9sen/exec",{

method:"POST",

body:JSON.stringify(data)

});

const result=await response.json();

if(result.result==="success"){

document.getElementById("successPopup").style.display="flex";

form.reset();

}else{

alert("Submission failed.");

}

}catch(error){

alert("Network Error");

}

submitBtn.disabled=false;

submitBtn.innerHTML="Confirm Attendance";

});

}
const closePopup=document.getElementById("closePopup");

if(closePopup){

closePopup.onclick=function(){

document.getElementById("successPopup").style.display="none";

}

}
// ==========================
// BACKGROUND MUSIC
// ==========================

const musicButton = document.querySelector(".music-btn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

if (musicButton && bgMusic) {

    musicButton.addEventListener("click", async () => {

        try {

            if (!isPlaying) {

                await bgMusic.play();

                musicButton.innerHTML = "❚❚";

                isPlaying = true;

            } else {

                bgMusic.pause();

                musicButton.innerHTML = "♫";

                isPlaying = false;

            }

        } catch (error) {

            console.log(error);

            alert("Music file could not be played.");

        }

    });

}