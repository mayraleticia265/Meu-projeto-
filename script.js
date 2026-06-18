function trocarFrase() {

    const frases = [
        "A perseverança transforma desafios em conquistas.",
        "Cada dia é uma nova oportunidade para crescer.",
        "A amizade verdadeira supera qualquer obstáculo.",
        "Os doramas nos mostram que sempre há esperança.",
        "Grandes histórias começam com pequenos passos.",
        "Acredite em si mesmo e siga em frente.",
        "Os desafios fazem parte do caminho para o sucesso."
    ];

    let sorteio = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerText = frases[sorteio];
}