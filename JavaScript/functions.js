function showBegin() {
    document.querySelector(".begin").style.display = "flex";
    document.querySelector(".spel").style.display = "none";
    document.querySelector(".informatie").style.display = "none";
    document.querySelector(".eind").style.display = "none";
}

function showSpel() {
    document.querySelector(".begin").style.display = "none";
    document.querySelector(".spel").style.display = "flex";
    document.querySelector(".informatie").style.display = "none";
    document.querySelector(".eind").style.display = "none";
}

function showInformatie() {
    document.querySelector(".begin").style.display = "none";
    document.querySelector(".spel").style.display = "none";
    document.querySelector(".informatie").style.display = "flex";
    document.querySelector(".eind").style.display = "none";
}

function showEind() {
    document.querySelector(".begin").style.display = "none";
    document.querySelector(".spel").style.display = "none";
    document.querySelector(".informatie").style.display = "none";
    document.querySelector(".eind").style.display = "flex";
}