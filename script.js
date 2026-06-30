const frases = [
    " A perseverança transforma desafios em conquistas.",
    " A amizade verdadeira supera qualquer obstáculo.",
    " Cada dia é uma nova oportunidade para crescer.",
    " Os doramas mostram que sempre existe esperança.",
    " Grandes histórias começam com pequenos passos.",
    " Nunca desista dos seus sonhos.",
    " Acredite em você e siga em frente."
];

function trocarFrase(){

    let numero = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerHTML = frases[numero];

}

const pesquisa = document.getElementById("pesquisar");

if(pesquisa){

    pesquisa.addEventListener("keyup", function(){

        let texto = pesquisa.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card){

            let nome = card.querySelector("h3").innerText.toLowerCase();

            if(nome.includes(texto)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}
const botaoModo = document.getElementById("modoEscuro");

if(botaoModo){

    botaoModo.addEventListener("click", function(){

        document.body.classList.toggle("dark");

    });

}

const explorar = document.querySelector(".btn-principal");

if(explorar){

    explorar.addEventListener("click", function(){

        document.getElementById("catalogo").scrollIntoView({

            behavior:"smooth"

        });

    });

}

const newsletter = document.querySelector("#contato button");

if(newsletter){

    newsletter.addEventListener("click", function(){

        alert(" Obrigado por se inscrever no DoramaLife!");

    });
}