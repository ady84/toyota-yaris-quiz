const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
    const beginText = document.querySelector("#begin-container");
    beginText.style.cssText = "display: none;";
    displayQuestions();
});

let answers = [];

async function displayQuestions() {
    const questions = document.querySelectorAll(".question");
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.cssText = "display: block;";
        
        const answerButtons = document.querySelectorAll(".answer");
        const answer = new Promise((resolve) => {
            answerButtons.forEach((answerBtn) => {
                answerBtn.addEventListener("click", () => {
                    resolve(answerBtn.dataset.score);
                });
            });
        });
        
        answers.push(await answer);
        
        questions[i].style.cssText = "display: none;";
    }

    showResult();
}

function showResult() {
    const resultContainer = document.querySelector("#result-container");
    resultContainer.style.cssText = "display: block;";

    const results = document.querySelectorAll(".result");

    let totalScore = 0;
    answers.forEach((score) => {
        totalScore += parseInt(score);
    });

    if (totalScore > 35) { // yaris
        results[0].style.cssText = "display: block;";
        results[0].lastElementChild.play();
    }
    else if (totalScore > 30) { // astra
        results[1].style.cssText = "display: block;";
        results[1].lastElementChild.play();
    }
    else if (totalScore > 25) { // qashqai
        results[2].style.cssText = "display: block;";
        results[2].lastElementChild.play();
    }
    else if (totalScore > 20) { // miata
        results[3].style.cssText = "display: block;";
        results[3].lastElementChild.play();
    }
    else if (totalScore > 16) { // zafira
        results[4].style.cssText = "display: block;";
        results[4].lastElementChild.play();
    }
    else { // golf
        results[5].style.cssText = "display: block;";
        results[5].lastElementChild.play();
    }
}
