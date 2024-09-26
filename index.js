var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Web Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let toogleBtn=document.querySelector(".toogle-bar");
let navMenu=document.querySelector(".menu");

toogleBtn.addEventListener("click",()=>{
    toogleBtn.classList.toggle("active");
    navMenu .classList.toggle("active");
})
