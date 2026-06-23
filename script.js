document.addEventListener("DOMContentLoaded", function () {

  const campo  = document.getElementById("campoPesquisa");
  const botao  = document.getElementById("botaoPesquisa");

  function pesquisar() {
    let texto = campo.value.toLowerCase().trim();
    let itens = document.querySelectorAll(".item-jogo");

    itens.forEach(function (item) {
      let titulo = item.querySelector("h5");
      let nome   = titulo ? titulo.textContent.toLowerCase() : "";

      item.style.display = (nome.includes(texto) || texto === "") ? "" : "none";
    });
  }

  botao.addEventListener("click", pesquisar);

  campo.addEventListener("keyup", function (event) {
    if (event.key === "Enter") pesquisar();
  });

  campo.addEventListener("input", pesquisar);

});

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

function jogar(nome) {
  window.open(dados[nome].link, "_blank");
}

function informacoes(nome) {
  let info = dados[nome];
  if (!info) return;

  document.getElementById("info").innerHTML =
    "<h2>" + nome + "</h2>" +
    "<p><strong>Criador:</strong> " + info.criador + "</p>" +
    "<p><strong>Ano:</strong> " + info.ano + "</p>" +
    "<p><strong>Categoria:</strong> " + info.categoria + "</p>" +
    "<p><strong>Plataformas:</strong> " + info.plataforma + "</p>" +
    "<p><strong>Descrição:</strong> " + info.descricao + "</p>" +
    "<br><button onclick='jogar(\"" + nome + "\")'>🎮 Jogar Agora</button>";
}

function entrar() {
  let usuario = document.getElementById("usuario").value.trim();
  let senha   = document.getElementById("senha").value.trim();

  if (usuario !== "" && senha !== "") {
    document.getElementById("login").style.display = "none";
    document.getElementById("site").style.display  = "block";
  } else {
    alert("Preencha usuário e senha!");
  }
}

function sair() {
  document.getElementById("site").style.display  = "none";
  document.getElementById("login").style.display = "block";
  // Limpa campos de login
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value   = "";
}

// ── Acessibilidade ──
function toggleModo() {
  document.body.classList.toggle("light-mode");
}

let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  aplicarFonte();
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    aplicarFonte();
  }
}

function aplicarFonte() {
  document.body.style.fontSize = tamanhoFonte + "px";
  document.querySelectorAll("h1").forEach(el => el.style.fontSize = (tamanhoFonte + 12) + "px");
  document.querySelectorAll("h2").forEach(el => el.style.fontSize = (tamanhoFonte + 8)  + "px");
  document.querySelectorAll("h3").forEach(el => el.style.fontSize = (tamanhoFonte + 4)  + "px");
  document.querySelectorAll("h5").forEach(el => el.style.fontSize = (tamanhoFonte + 2)  + "px");
}

function abrirSuporte() {
  document.getElementById("paginaPrincipal").style.display = "none";
  document.getElementById("paginaSuporte").style.display   = "block";
}

function voltarInicio() {
  document.getElementById("paginaSuporte").style.display   = "none";
  document.getElementById("paginaPrincipal").style.display = "block";
}

function enviarMensagem() {
  let nome     = document.getElementById("nomeContato").value.trim();
  let email    = document.getElementById("emailContato").value.trim();
  let mensagem = document.getElementById("mensagemContato").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato pelo e-mail: " + email);

  document.getElementById("nomeContato").value    = "";
  document.getElementById("emailContato").value   = "";
  document.getElementById("mensagemContato").value = "";
}