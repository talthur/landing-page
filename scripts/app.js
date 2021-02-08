menu = document.querySelector(".menu");
hamburguerClick = document.querySelector(".hamburger");
bullets = document.querySelector(".nav__bullets");
photo = document.querySelector("#photo");

listPhotos = ["1.jpg", "2.jpg", "3.jpg"]

hamburguerClick.addEventListener("click", () => {
    
    hamburguerClick.classList.toggle("is-active");

    if (menu.style.display === "block"){
    
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

});

bullets.addEventListener("click", (e) => {

    if (e.target.dataset.id == "0"){
        e.preventDefault()
        activeBullet(e)
        photo.src = `images/${listPhotos[0]}`;
        
    }

    if (e.target.dataset.id == "1"){
        e.preventDefault()
        activeBullet(e)
        photo.src = `images/${listPhotos[1]}`;
        
    }

    if (e.target.dataset.id == "2"){
        e.preventDefault()
        activeBullet(e)
        photo.src = `images/${listPhotos[2]}`;
        
    }
    
});

function activeBullet(e) {
    console.log(e);
    document.querySelector("#active").id = "";
    e.target.id = "active";
}