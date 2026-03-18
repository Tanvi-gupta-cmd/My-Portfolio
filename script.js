// smooth scroll

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.pageX + "px";
glow.style.top = e.pageY + "px";

});

const toggle = document.getElementById("themeToggle");

toggle.onclick = () =>{
document.body.classList.toggle("dark-mode");
}

const reveals = document.querySelectorAll(".project-card, .skill-card");

window.addEventListener("scroll", ()=>{

reveals.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

});