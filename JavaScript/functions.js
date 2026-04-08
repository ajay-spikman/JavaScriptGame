let vragen = [
    {
        tekst: "Is dit boek van ....?",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Ik heb .... gisteren nog gebeld.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Waar ligt .... tas?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ik ben benieuwd naar .... mening.",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ik wil graag met .... praten.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Dit is .... fiets, toch?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Hij geeft .... een cadeau.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Is dat .... idee geweest?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ik zie .... daar staan.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Hoe gaat het met .... ouders?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ik vertrouw .... volledig.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Heb je .... telefoon al gevonden?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ze helpt .... met huiswerk.",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Wat vind je van .... nieuwe baan?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Ik kan niet zonder .... .",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Is dit .... jas of die van iemand anders?",
        antwoorden: ["jou", "jouw"],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;

function renderVragen() {
    let tekstElement = document.getElementById("tekst");
    let antwoordKnoppen = document.querySelectorAll(".Game_Button");

    if (currentQuestion < vragen.length) {
        const vraag = vragen[currentQuestion];
        tekstElement.textContent = vraag.tekst;
        
        antwoordKnoppen.forEach((knop, index) => {
            knop.textContent = vraag.antwoorden[index];
            knop.style.backgroundColor = "bisque";
        });
    }
}

function checkAnswer(index) {
    const correct = vragen[currentQuestion].correct;
    const antwoordKnoppen = document.querySelectorAll(".Game_Button");
    
    if (index === correct) {
        score++;
        antwoordKnoppen[index].style.backgroundColor = "green";
    } else {
        antwoordKnoppen[index].style.backgroundColor = "red";
        antwoordKnoppen[correct].style.backgroundColor = "green";
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < vragen.length) {
            renderVragen();
        } else {
            document.getElementById("Eind score").textContent = `Je hebt ${score} van ${vragen.length} vragen goed!`;
            showEind();
        }
    }, 1000);
}


function showElement(begin, spel, informatie, eind) 
{
    document.querySelector(".begin").style.display = begin;
    document.querySelector(".spel").style.display = spel;
    document.querySelector(".informatie").style.display = informatie;
    document.querySelector(".eind").style.display = eind;
}

function showBegin() {
    currentQuestion = 0;
    score = 0;
    showElement("flex", "none", "none", "none");
}

function showSpel() {
    currentQuestion = 0;
    score = 0;
    showElement("none", "flex", "none", "none");
    renderVragen();
}

function showInformatie() {
    showElement("none", "none", "flex", "none");
}

function showEind() {
    showElement("none", "none", "none", "flex");
}
