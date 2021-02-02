menu = document.querySelector(".menu");
hamburguerClick = document.querySelector(".hamburger");
icone = 

hamburguerClick.addEventListener("click", () => {
    
    hamburguerClick.classList.toggle("is-active");

    if (menu.style.display === "block"){
    
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

})