const nameCard = document.getElementById("nameCard");
const wishCard = document.getElementById("wishCard");
const wishText = document.getElementById("wishText");
const popup = document.getElementById("popup");
const music = document.getElementById("music");

function showWish(){
    const name = document.getElementById("nameInput").value || "My Love";
    wishText.innerText = `Happy Rose Day ${name} 🌹`;
    nameCard.classList.add("hidden");
    wishCard.classList.remove("hidden");
}

document.getElementById("openBtn").addEventListener("click",()=>{
    popup.style.display="flex";
    music.play();
});

function closePopup(){
    popup.style.display="none";
    music.pause();
}
