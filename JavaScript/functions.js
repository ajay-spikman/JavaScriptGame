// questions is loaded from questions.js via regular script tag

function showElement(begin, spel1, spel2, countdown, informatie, eind) 
{
    document.querySelector(".begin").style.display = begin;
    document.querySelector(".spel1").style.display = spel1;
    document.querySelector(".spel2").style.display = spel2;
    document.querySelector(".countdown").style.display = countdown;
    document.querySelector(".informatie").style.display = informatie;
    document.querySelector(".eind").style.display = eind;
}

function showBegin() {
    currentQuestion = 0;
    score = 0;
    showElement("flex", "none", "none", "none", "none", "none");
}

function showSpel1() {
    currentQuestion = 0;
    score = 0;
    question_set = 0;
    vragen = questions[question_set];
    showElement("none", "flex", "none", "none", "none", "none");
    renderVragen();
    let gametimerElement = document.getElementById("gametimer");
    let timeLeft = 30;
    gametimerElement.textContent = `Tijd: ${timeLeft}s`;

    let gametimerInterval = setInterval(() => {
        timeLeft--;
        gametimerElement.textContent = `Tijd: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(gametimerInterval);
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${vragen.length} vragen goed!`;
            showEind();
        }
    }, 1000);
}

function showSpel2() {
    currentQuestion = 0;
    score = 0;
    question_set = 1;
    vragen = questions[question_set];
    showElement("none", "none", "flex", "none", "none", "none");
    renderVragen();
    let gametimerElement = document.getElementById("gametimer2");
    let timeLeft = 30;
    gametimerElement.textContent = `Tijd: ${timeLeft}s`;

    let gametimerInterval = setInterval(() => {
        timeLeft--;
        gametimerElement.textContent = `Tijd: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(gametimerInterval);
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${vragen.length} vragen goed!`;
            showEind();
        }
    }, 1000);
}

function showCountdown() {
    showElement("none", "none", "none", "flex", "none", "none");
    let countdownElement = document.getElementById("aftel");
    let countdownValue = 3;
    countdownElement.textContent = countdownValue;

    let countdownInterval = setInterval(() => {
        countdownValue--;
        countdownElement.textContent = countdownValue;
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            if (question_set === 0) {
                showSpel1();
            } else if (question_set === 1) {
                showSpel2();
            }
        }
    }, 1000);
}


function showInformatie() {
    showElement("none", "none", "none", "none", "flex", "none");
}

function showEind() {
    showElement("none", "none", "none", "none", "none", "flex");
}

let question_set = 0;
let vragen = [];

let currentQuestion = 0;
let score = 0;

// Initialize vragen after import
vragen = questions[question_set];

function renderVragen() {
    const tekstId = question_set === 0 ? "tekst1" : "tekst2";
    const antwoordId = question_set === 0 ? "Antwoord_knoppen1" : "Antwoord_knoppen2";
    
    let tekstElement = document.getElementById(tekstId);
    let antwoordContainer = document.getElementById(antwoordId);
    let antwoordKnoppen = antwoordContainer.querySelectorAll(".Game_Button");

    if (currentQuestion < vragen.length) {
        const vraag = vragen[currentQuestion];
        tekstElement.textContent = vraag.tekst;
        
        antwoordKnoppen.forEach((knop, index) => {
            knop.textContent = vraag.antwoorden[index];
            knop.style.backgroundColor = "bisque";
            knop.style.border = "2px solid pink";
        });
    }
}

function checkAnswer(index) {
    const correct = vragen[currentQuestion].correct;
    const antwoordId = question_set === 0 ? "Antwoord_knoppen1" : "Antwoord_knoppen2";
    const antwoordContainer = document.getElementById(antwoordId);
    const antwoordKnoppen = antwoordContainer.querySelectorAll(".Game_Button");
    
    if (index === correct) {
        score++;
        // antwoordKnoppen[index].style.backgroundColor = "green";
        antwoordKnoppen[index].style.border = "2px solid green";
    } else {
        antwoordKnoppen[index].style.backgroundColor = "red";
        antwoordKnoppen[correct].style.backgroundColor = "green";
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < vragen.length) {
            renderVragen();
        } else {
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${vragen.length} vragen goed!`;
            showEind();
        }
    }, 1000);
}

// Make functions globally available for onclick handlers
window.showBegin = showBegin;
window.showSpel1 = showSpel1;
window.showSpel2 = showSpel2;
window.showInformatie = showInformatie;
window.checkAnswer = checkAnswer;