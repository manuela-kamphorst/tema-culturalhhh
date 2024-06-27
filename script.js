const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Como podemos aumentar o acesso à cultura para todos?",
        alternativas: ["A) Investindo em bibliotecas e espaços culturais comunitários.", "B) Subsidiando apenas eventos culturais de grande escala."],
    },
    {
        enunciado: "Qual é o papel das escolas na promoção de cultura?",
        alternativas: ["A) Integrando disciplinas de artes e humanidades no currículo", "B) Focando exclusivamente em disciplinas STEM (Ciência, Tecnologia, Engenharia e Matemática."],
    },
    {
        enunciado: "Como podemos preservar e promover a diversidade cultural?",
        alternativas: ["A) Apoiando festivais e eventos que celebram diferentes culturas locais e globais.", "B) Reduzindo a variedade de expressões culturais para facilitar a assimilação cultural."],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        textoResultado.textContent = `Você respondeu todas as perguntas! Sua história: ${historiaFinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();
