const  toogleMenu=document.querySelector(".toogle");
const navLinks=document.querySelector(".nav-links");
let menuOpen=false;

toogleMenu.addEventListener("click", ()=>{
    if(!menuOpen){
        toogleMenu.classList.add("open");
        menuOpen= true;
    }else{
        toogleMenu.classList.remove("open");
        menuOpen= false;
    }
    navLinks.classList.toggle("open")
})
