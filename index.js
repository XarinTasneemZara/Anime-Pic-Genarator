let button = document.getElementById("btn");
let animeContainer = document.getElementById("imgContainer");
let animeImg = document.getElementById("animeImg");
let animeName = document.getElementById("animeName");


async function animeImage() {
    var response = await fetch("https://api.catboys.com/img");
    var makeJson = await response.json();
    animeImg.style.display = "block";
    animeImg.src = makeJson.url;
    animeName.innerText = makeJson.artist;
    
}

button.addEventListener("click", animeImage)