const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Que tipo de aprendizado você prefere?",
        alternativas: [
            "Por meio de vídeos!",
            "Por meio de leitura!"
        ]
    },
    {
        enunciado: "Que tipo de atividade você prefere?",
        alternativas: [
            "Escrita!",
            "Prática!"
        ]
    },
    {
        enunciado: "Na atividade escrita, você prefere escrever ou digitar?",
        alternativas: [
            "Escrever!",
            "Digitar!"
        ]
    },
    {
        enunciado: "Na atividade prática, você prefere qual atividade?",
        alternativas: [
            "Atividade artística!",
            "Atividade tecnológica!"
        ]
    },
    {
        enunciado: "Nas aulas com vídeos, o que você prefere?",
        alternativas: [
            "Estudar sozinho!",
            "Estudar em equipe!"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

        console.log(alternativa);
    }
}

mostraPergunta();
