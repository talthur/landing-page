menu = document.querySelector(".menu");
hamburguerClick = document.querySelector(".hamburger");
bullets = document.querySelector(".nav__bullets");
photo = document.querySelector("#photo");
containerArrows = document.querySelector(".container__arrows");
navBullets = document.querySelector(".nav__bullets")

listPhotos = [
    {
        photo:"1.jpg",
        bullet:0
    },

    {

        photo:"2.jpg",
        bullet:1
    },

    {
        photo:"3.jpg",
        bullet:2
    }
    
]

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
    navBullets.children[pos].id = "active";
    
}

let pos = 0

containerArrows.addEventListener("click", (e) => {

    if (e.target.id == "arrowr"){
        if (pos == 2){
            pos = 0;
            activeBullet(pos);
        }
        else{
            pos += 1;
            activeBullet(pos);
        }
    };

    if (e.target.id == "arrowl"){
        if (pos == 0){
            pos = 2;
            activeBullet(pos);
        }
        else{
            pos -= 1;
            activeBullet(pos);
        }
    };
    photo.src = `images/${listPhotos[pos].photo}`;

})