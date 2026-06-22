
// PESQUISA
let campo = document.querySelector(".pesquisa input");
let botao = document.querySelector(".pesquisa button");
let jogos = document.querySelectorAll(".jogo");

// BANCO DE DADOS DOS JOGOS
const dados = {

"Roblox": {
    categoria: "Sandbox",
    plataforma: "PC, Xbox e Mobile",
    criador: "Roblox Corporation",
    ano: "2006",
    descricao: "Plataforma com milhares de jogos criados pelos próprios jogadores.",
    link: "https://www.roblox.com"
},

"PUBG": {
    categoria: "Battle Royale",
    plataforma: "PC, Xbox, PlayStation e Mobile",
    criador: "PUBG Studios",
    ano: "2017",
    descricao: "Jogo de sobrevivência com até 100 jogadores.",
    link: "https://pubg.com"
},

"Fortnite": {
    categoria: "Battle Royale",
    plataforma: "PC, Xbox, PlayStation e Mobile",
    criador: "Epic Games",
    ano: "2017",
    descricao: "Battle Royale com eventos e temporadas.",
    link: "https://www.fortnite.com"
},

"GTA V": {
    categoria: "Ação e Aventura",
    plataforma: "PC, Xbox e PlayStation",
    criador: "Rockstar Games",
    ano: "2013",
    descricao: "Mundo aberto da Rockstar Games.",
    link: "https://www.rockstargames.com/gta-v"
},

"Red Dead Redemption 2": {
    categoria: "Aventura",
    plataforma: "PC, Xbox e PlayStation",
    criador: "Rockstar Games",
    ano: "2018",
    descricao: "Aventura no velho oeste.",
    link: "https://www.rockstargames.com/reddeadredemption2"
},

"EA FC 25": {
    categoria: "Esporte",
    plataforma: "PC, Xbox, PlayStation e Switch",
    criador: "EA Sports",
    ano: "2024",
    descricao: "Simulador de futebol.",
    link: "https://www.ea.com"
},

"Minecraft": {
    categoria: "Sandbox",
    plataforma: "PC, Xbox, PlayStation e Mobile",
    criador: "Mojang Studios",
    ano: "2011",
    descricao: "Construção em blocos.",
    link: "https://www.minecraft.net"
},

"Valorant": {
    categoria: "FPS Tático",
    plataforma: "PC",
    criador: "Riot Games",
    ano: "2020",
    descricao: "FPS competitivo.",
    link: "https://playvalorant.com"
},

"Call of Duty": {
    categoria: "FPS",
    plataforma: "PC, Xbox e PlayStation",
    criador: "Activision",
    ano: "2003",
    descricao: "Grande franquia FPS.",
    link: "https://www.callofduty.com"
}

};

// PESQUISA
function pesquisar() {

    let texto = campo.value.toLowerCase();

    jogos.forEach(function(jogo){

        let titulo = jogo.querySelector("h3, h5");

        let nome = titulo ? titulo.textContent.toLowerCase() : "";

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

// CLICK NO JOGO
jogos.forEach(function(jogo){

    jogo.addEventListener("click", function(){

        jogos.forEach(function(item){
            item.classList.remove("selecionado");
        });

        jogo.classList.add("selecionado");

        let titulo = jogo.querySelector("h3, h5");
        let nome = titulo ? titulo.textContent : "";

        let info = dados[nome];

        document.getElementById("info").innerHTML =
        "<h2>" + nome + "</h2>" +
        "<p>Escolha uma opção:</p><br>" +
        "<button onclick='jogar(\"" + nome + "\")'>Jogar Agora</button> " +
        "<button onclick='informacoes(\"" + nome + "\")'>Ver Informações</button>";

    });

});

// JOGAR
function jogar(nome){
    window.open(dados[nome].link, "_blank");
}

// INFORMAÇÕES
function informacoes(nome){

    let info = dados[nome];

    document.getElementById("info").innerHTML =
    "<h2>" + nome + "</h2>" +
    "<p><strong>Criador:</strong> " + info.criador + "</p>" +
    "<p><strong>Ano:</strong> " + info.ano + "</p>" +
    "<p><strong>Categoria:</strong> " + info.categoria + "</p>" +
    "<p><strong>Plataformas:</strong> " + info.plataforma + "</p>" +
    "<p><strong>Descrição:</strong> " + info.descricao + "</p>" +
    "<br><button onclick='jogar(\"" + nome + "\")'>Jogar Agora</button>";

}

// LOGIN
function entrar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario !== "" && senha !== ""){
        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";
    } else {
        alert("Preencha usuário e senha!");
    }
}

// LOGOUT
function sair(){
    document.getElementById("site").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function toggleModo(){
    document.body.classList.toggle("light-mode");
}

function toggleModo(){
    document.body.classList.toggle("light-mode");
}

let tamanhoFonte = 16;

function aumentarFonte(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

    document.querySelectorAll("h1").forEach(function(el){
        el.style.fontSize = (tamanhoFonte + 12) + "px";
    });

    document.querySelectorAll("h2").forEach(function(el){
        el.style.fontSize = (tamanhoFonte + 8) + "px";
    });

    document.querySelectorAll("h3").forEach(function(el){
        el.style.fontSize = (tamanhoFonte + 4) + "px";
    });

    document.querySelectorAll("h5").forEach(function(el){
        el.style.fontSize = (tamanhoFonte + 2) + "px";
    });

}

function diminuirFonte(){

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

        document.querySelectorAll("h1").forEach(function(el){
            el.style.fontSize = (tamanhoFonte + 12) + "px";
        });

        document.querySelectorAll("h2").forEach(function(el){
            el.style.fontSize = (tamanhoFonte + 8) + "px";
        });

        document.querySelectorAll("h3").forEach(function(el){
            el.style.fontSize = (tamanhoFonte + 4) + "px";
        });

        document.querySelectorAll("h5").forEach(function(el){
            el.style.fontSize = (tamanhoFonte + 2) + "px";
        });

    }

}