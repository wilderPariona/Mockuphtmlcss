let navbarstate = false;

navbarHamburguer.addEventListener("click",()=>{
    navbarstate = true;
    checknavbarstate();
})

const checknavbarstate = () => {
    if(navbarstate){modalnavbar.style.display="flex"}else{modalnavbar.style.display="none"}  
}

navbarclosebutton.addEventListener("click",()=>{
    navbarstate = false;
    checknavbarstate();
})