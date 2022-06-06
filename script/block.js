var canvas; //o elemento canvas sobre o qual desenharemos
var ctx; //o "contexto" da canvas que sera utilizado (2D ou 3D)
var dx = 10; //a tava de varicao (velocidade) horizontal do objeto
var dy = 10; //a tava de variacao (velocidade) vertical do objeto
var x = 250; //posicao horizontal do objeto (com valor inicial)
var y = 100; //posicao vertical do objeto (com valor inicial)
var WIDTH = 1575; //largura da area retangular
var HEIGHT = 600; //altura da area retangular

function Desenhar() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(x, y, 20, 0, Math.PI * 2, true);
  ctx.fill();
}

function LimparTela() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.rect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function Iniciar() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(Atualizar, 10);
}

function KeyDown(evt) {
  switch (evt.keyCode) {
    case 38 /*seta para cima */:
      if (y - dy > 0) {
        y -= dy;
      }
      break;
    case 40 /*set para baixo*/:
      if (y + dy < HEIGHT) {
        y += dy;
      }
      break;
    case 37 /*set para esquerda*/:
      if (x - dx > 0) {
        x -= dx;
      }
      break;
    case 39 /*seta para direita*/:
      if (x + dx < WIDTH) {
        x += dx;
      }
      break;
  }
}

function Atualizar() {
  LimparTela();
  Desenhar();
}
window.addEventListener("keydown", KeyDown, true);
Iniciar();
