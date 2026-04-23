// questions is loaded from questions.js via regular script tag

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

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
    vragen = shuffleArray([...questions[question_set]]);
    showElement("none", "flex", "none", "none", "none", "none");
    renderVragen();
    let gametimerElement = document.getElementById("gametimer");
    let intialTime = 60;
    let timeLeft = intialTime;
    gametimerElement.textContent = `Tijd: ${timeLeft}s`;

    let gametimerInterval = setInterval(() => {
        timeLeft--;
        gametimerElement.textContent = `Tijd: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(gametimerInterval);
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${currentQuestion} vragen goed!`;
            showEind();
        }
    }, 1000);
}

function showSpel2() {
    currentQuestion = 0;
    score = 0;
    question_set = 1;
    vragen = shuffleArray([...questions[question_set]]);
    showElement("none", "none", "flex", "none", "none", "none");
    renderVragen();
    let gametimerElement = document.getElementById("gametimer2");
    let timeLeft = 60;
    gametimerElement.textContent = `Tijd: ${timeLeft}s`;

    let gametimerInterval = setInterval(() => {
        timeLeft--;
        gametimerElement.textContent = `Tijd: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(gametimerInterval);
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${currentQuestion} vragen goed!`;
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
            } else {    showSpel2();
            }
        }
    }, 1000);
}

function startSpel1() {
    question_set = 0;
    showCountdown();
}

function startSpel2() {
    question_set = 1;
    showCountdown();
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
            knop.style.backgroundColor = "rgb(197, 231, 231)";
            knop.style.border = "2px solid black";
        });
    }
}

function checkAnswer(index) {
    const correct = vragen[currentQuestion].correct;
    const antwoordId = question_set === 0 ? "Antwoord_knoppen1" : "Antwoord_knoppen2";
    const antwoordContainer = document.getElementById(antwoordId);
    const antwoordKnoppen = antwoordContainer.querySelectorAll(".Game_Button");
    
    if (index === correct) {
        document.getElementById(antwoordId).style.pointerEvents = 'disabled';
        score++;
        antwoordKnoppen[index].style.backgroundColor = "green";
        document.getElementById("clickSound1").play();
    } else {
        antwoordKnoppen[index].style.backgroundColor = "red";
        document.getElementById("clickSound2").play();
        antwoordKnoppen[correct].style.backgroundColor = "green";
    }
    
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion < vragen.length) {
            renderVragen();
        } else {
            document.getElementById("Eind_score").textContent = `Je hebt ${score} van ${currentQuestion} vragen goed!`;
            showEind();
        }
    }, 1000);
}

function Playsound1() {
    document.getElementById("clickSound1").play();
}

function Playsound0() {
    document.getElementById("clickSound2").play();
}

function terugNaarBegin() {
    showBegin();
    if (terugNaarBeginInterval) {
        clearInterval(teruqgNaarBeginInterval);
    }
}

window.showBegin = showBegin;
window.showSpel1 = showSpel1;
window.showSpel2 = showSpel2;
window.showInformatie = showInformatie;
window.checkAnswer = checkAnswer;
window.startSpel1 = startSpel1;
window.Playsound1 = Playsound1;
window.Playsound0 = Playsound0;
window.startSpel2 = startSpel2;
window.checkAnswer = checkAnswer;
window.playAudio = playAudio;