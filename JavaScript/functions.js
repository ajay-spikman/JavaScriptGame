let vragen = [
    {
        tekst: "Is dit boek van ....?",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Ik heb .... gisteren nog gebeld.",
        antwoorden: ["jou", "jouw"],
        correct: 1
    },
    {
        tekst: "Waar ligt .... tas?",
        antwoorden: ["jou", "jouw"],
        correct: 0
    },
    {
        tekst: "Ik ben benieuwd naar .... mening.",
        antwoorden: ["jou", "jouw"],
        correct: 0
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
        correct: 0
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
        correct: 0
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
        tekst: "`Is dit .... jas of die van iemand anders?",
        antwoorden: ["jou", "jouw"],
        correct: 0
    }

];

function showElement(begin, spel, informatie, eind) 
{
    document.querySelector(".begin").style.display = begin;
    document.querySelector(".spel").style.display = spel;
    document.querySelector(".informatie").style.display = informatie;
    document.querySelector(".eind").style.display = eind;
}

function showBegin() {
    showElement("flex", "none", "none", "none");
}

function showSpel() {
    showElement("none", "flex", "none", "none");
    let tekstElement = document.getElementById("tekst");
    let antwoordKnoppen = document.querySelectorAll(".Game_Button");

    antwoordKnoppen.forEach((knop, index) => {
        knop.textContent = vragen[1].antwoorden[index];
    });
    tekstElement.textContent = vragen[1].tekst;
}

function showInformatie() {
    showElement("none", "none", "flex", "none");
}

function showEind() {
    showElement("none", "none", "none", "flex");
}
