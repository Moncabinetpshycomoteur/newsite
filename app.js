// Animation au défilement

const elements = document.querySelectorAll(
".card, .steps div, .about-image, .about-text"
);


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{
threshold:0.15
});



elements.forEach(el=>{

observer.observe(el);

});




// Petit effet sur le menu au scroll

window.addEventListener("scroll",()=>{


const nav = document.querySelector(".navbar");


if(window.scrollY > 50){

nav.style.background="rgba(255,255,255,0.9)";
nav.style.backdropFilter="blur(10px)";
nav.style.borderRadius="20px";

}

else{

nav.style.background="transparent";

}


});