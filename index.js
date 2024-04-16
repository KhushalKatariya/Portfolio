var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Web Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// function navBar(){
//     let sidebar=document.getElementById("sidebar")
//     let btn=document.querySelector(".toggle-btn")
//     if(sidebar.style.right === "0px"){
//         sidebar.style.right-"-250px";
//         btn.classList.remove=("open")
//     } else{
//         sidebar.style.right = "0px"
//         btn.classList.add("open");
//     }
// }
function navBar(){
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.querySelector(".toggle-btn");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
        toggleBtn.classList.remove("open");
    } else {
        sidebar.style.right = "0px";
        toggleBtn.classList.add("open");
    }
}
