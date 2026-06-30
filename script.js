const quizData = [
    {
        question: "1. Você costuma verificar a veracidade de uma notícia gerada por IA antes de compartilhá-la?",
        options: [
            { text: "Sempre. Eu checo fontes e imagens.", points: 3 },
            { text: "Às vezes, se parecer muito absurda.", points: 1 },
            { text: "Raramente, confio no que recebo.", points: 0 }
        ]
    },
    {
        question: "2. Como você gerencia suas permissões de privacidade em aplicativos e ferramentas de IA?",
        options: [
            { text: "Leio os termos e desativo coletas desnecessárias.", points: 3 },
            { text: "Aceito tudo direto para ir mais rápido.", points: 0 },
            { text: "Mudo apenas se ouvir falar de algum escândalo.", points: 1 }
        ]
    },
    {
        question: "3. Se uma IA toma uma decisão preconceituosa (viés algorítmico), de quem é a culpa?",
        options: [
            { text: "Da própria máquina, ela pensa sozinha.", points: 0 },
            { text: "Dos desenvolvedores e dos dados usados no treino.", points: 3 },
            { text: "Não há culpados, tecnologia é assim mesmo.", points: 1 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalPoints = 0;

const questionElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result-text");

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.addEventListener("click", () => selectOption(option.points));
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function selectOption(points) {
    totalPoints += points;
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    if (totalPoints >= 7) {
        resultText.innerText = `Pontuação: ${totalPoints}/9. Nível: Cidadão Cyber-Cônscio! Você entende os riscos da IA e protege ativamente seus direitos digitais.`;
    } else if (totalPoints >= 4) {
        resultText.innerText = `Pontuação: ${totalPoints}/9. Nível: Usuário em Transição. Você tem boas noções, mas ainda precisa blindar seus dados e ser mais crítico com as IAs.`;
    } else {
        resultText.innerText = `Pontuação: ${totalPoints}/9. Nível: Vulnerável Digital. Seus dados e percepções estão expostos aos perigos de manipulação algorítmica. Estude mais sobre ética em IA!`;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    totalPoints = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
}

// Inicializa o quiz
document.addEventListener("DOMContentLoaded", loadQuestion);
