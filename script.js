document.addEventListener("DOMContentLoaded", function () {

    const message = `
🌟Wishing You A Very Happiest BirthDay💕🌟!... 

💕Every Moment With You Feels Like Magic🤍!...

🤌I Hurt You With My Words And Actions
When You Need LOVE And CARE🎀....

🤍You Deserves A Happy Life Filled With Peace, 
Love, And Endless Happiness.🎀..

💕🙌You Deserved My Support And Care,
Not My Anger.✅💙
`;

    const words = message.split(" ");
    const container = document.getElementById("sorryText");

    let index = 0;

    function typeWord() {
        if (index < words.length) {

            if (words[index] === "\n") {
                container.innerHTML += "<br>";
            } else {
                const span = document.createElement("span");
                span.className = "glitter-word";
                span.textContent = words[index];
                container.appendChild(span);
            }

            index++;
            setTimeout(typeWord, 400);
        }
    }

    typeWord();
});

const words = message.split(" ");
let wordIndex = 0;

function typeWords() {
    if (wordIndex < words.length) {
        const span = document.createElement("span");
        span.innerHTML = words[wordIndex] + " ";
        document.getElementById("sorryText").appendChild(span);

        wordIndex++;
        setTimeout(typeWords, 200); // speed of word typing
    }
}

window.onload = typeWords;

let lineIndex = 0;

function typeLines() {
    if (lineIndex < messageLines.length) {
        document.getElementById("sorryText").innerHTML += 
            messageLines[lineIndex] + "<br>";
        lineIndex++;
        setTimeout(typeLines, 700);
    }
}

window.onload = typeLines;


// Page Navigation
function changePage(from, to) {
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
}

function goToMemories() {
    changePage("page1", "page2");
}

function goToQuotes() {
    changePage("page2", "page3");
}

function startLife() {
    changePage("page3", "page4");
    luxuryShower();
}


// Luxury Flower + Heart Shower
function luxuryShower() {
    const items = ["🌹","💙","👑","✨","💎","💖","🌸"];

    for (let i = 0; i < 80; i++) {
        let element = document.createElement("div");
        element.className = "royal-item";
        element.innerHTML = items[Math.floor(Math.random()*items.length)];

        element.style.left = Math.random()*100 + "vw";
        element.style.fontSize = (20 + Math.random()*25) + "px";
        element.style.animationDuration = (4 + Math.random()*4)+"s";

        document.body.appendChild(element);

        setTimeout(() => element.remove(), 8000);
    }
}