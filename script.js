let campo = document.querySelector(".pesquisa input");
let botao = document.querySelector(".pesquisa button");
let jogos = document.querySelectorAll(".jogo");

const dados = {

    "Roblox": {
        categoria: "Sandbox",
        plataforma: "PC, Xbox e Mobile",
        link: "https://www.roblox.com"
    },

    "PUBG": {
        categoria: "Battle Royale",
        plataforma: "PC, Xbox, PlayStation e Mobile",
        link: "https://pubg.com"
    },

    "Fortnite": {
        categoria: "Ação",
        plataforma: "PC, Xbox, PlayStation e Mobile",
        link: "https://www.fortnite.com"
    },

    "GTA V": {
        categoria: "Ação e Aventura",
        plataforma: "PC, Xbox e PlayStation",
        link: "https://www.rockstargames.com/gta-v"
    },

    "Red Dead Redemption 2": {
        categoria: "Aventura",
        plataforma: "PC, Xbox e PlayStation",
        link: "https://www.rockstargames.com/reddeadredemption2"
    },

    "EA FC 25": {
        categoria: "Esporte",
        plataforma: "PC, Xbox, PlayStation e Switch",
        link: "https://www.ea.com"
    },

    "Minecraft": {
        categoria: "Sandbox",
        plataforma: "PC, Xbox, PlayStation e Mobile",
        link: "https://www.minecraft.net"
    },

    "Valorant": {
        categoria: "Tiro",
        plataforma: "PC",
        link: "https://playvalorant.com"
    },

    "Call of Duty": {
        categoria: "FPS",
        plataforma: "PC, Xbox e PlayStation",
        link: "https://www.callofduty.com"
    }

};

function pesquisar() {

    let texto = campo.value.toLowerCase();

    jogos.forEach(function(jogo){

        let nome = jogo.querySelector("h3").textContent.toLowerCase();

        if(nome.includes(texto) || texto === ""){
            jogo.style.display = "block";
        } else {
            jogo.style.display = "none";
        }

    });

}

botao.addEventListener("click", pesquisar);

campo.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        pesquisar();
    }
});

jogos.forEach(function(jogo){

    jogo.addEventListener("click", function(){

        let nome = jogo.querySelector("h3").textContent;
        let info = dados[nome];

        document.getElementById("info").innerHTML =

        "<h2>" + nome + "</h2>" +

        "<br><a href='" + info.link + "' target='_blank'>" +

        "<button>Jogar Agora</button>" +

        "</a>";

    });

});