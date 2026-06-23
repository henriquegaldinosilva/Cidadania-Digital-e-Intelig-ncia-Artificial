// Seleção de elementos do DOM
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
const btnVerificar = document.getElementById('btn-verificar');
const selectQ1 = document.getElementById('q1');
const divResultado = document.getElementById('resultado');

// 1. Recurso de Acessibilidade: Alternar Modo Escuro
btnAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Validador do Quiz Anti-Desinformação
btnVerificar.addEventListener('click', () => {
    const respostaUsuario = selectQ1.value;

    // Validação para garantir que o usuário escolheu uma opção
    if (respostaUsuario === "") {
        divResultado.textContent = "Por favor, selecione uma resposta primeiro.";
        divResultado.style.backgroundColor = "#ffeb3b";
        divResultado.style.color = "#000";
        divResultado.classList.remove('escondido');
        return;
    }

    // Processamento e feedback dinâmico
    if (respostaUsuario === "sim") {
        divResultado.textContent = "Correto! Detalhes como falhas nos olhos ou movimentos robóticos ajudam a identificar vídeos forjados por IA.";
        divResultado.style.backgroundColor = "#4caf50";
        divResultado.style.color = "#fff";
    } else {
        divResultado.textContent = "Incorreto. Atualmente, muitas IAs ainda cometem erros sutis na geração de rostos e piscadas.";
        divResultado.style.backgroundColor = "#f44336";
        divResultado.style.color = "#fff";
    }

    // Exibe o resultado manipulando as classes do DOM
    divResultado.classList.remove('escondido');
});
