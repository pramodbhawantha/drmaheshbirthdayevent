function createParticle(){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=(6+Math.random()*6)+"s";

    particle.style.opacity=Math.random();

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },12000);

}

setInterval(createParticle,350);