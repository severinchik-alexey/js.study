let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Размер поля
const W = 800;
const H = 600;
canvas.width = W;
canvas.height = H;

//Размер ракетки
const rocketWidth = 20;
const rocketHeight = 200;

//Первоначальное положение ракеток
let Rocket1Y = H / 2 - rocketHeight / 2;
let Rocket2Y = H / 2 - rocketHeight / 2;

//Шаг ракеток
let step = 3;

//Движение
let action = false;
let timerId;

//Рандоматизация вылета шарика
function randomXNumber() {
  let num = Math.random();
  if (num < 0.5) {
    num = -1;
  } else {
    num = 1;
  }
  return num;
};

function randomYNumber(min, max) {
  let num = Math.random() * (max - min) + min;
  if (num === 0) {
    num = 2;
  }
  return num;
};

//Параметры шарика
let ballX = W / 2; //первоначальное положение
let ballY = H / 2;
let ballRadius = 10;
let speedX = randomXNumber();
let speedY = randomYNumber(-1, 1); //скорость шарика

render();

//Функции остановки/запуска
function start() {
  reset();
  document.getElementById("startButton").disabled = true;
  timerId = setInterval(updateView, 0);
  action = true;
}

function stop() {
  document.getElementById("startButton").disabled = false;
  action = false;
  clearInterval(timerId);
}

//Функция отрисовки
function render() {
  ctx.fillStyle = "#fbfd99"; //Цвет поля
  ctx.fillRect(0, 0, W, H); //Само поле 

  //Отрисовка ракеток 
  ctx.fillStyle = "#7FFF00";
  ctx.fillRect(0, Rocket1Y, rocketWidth, rocketHeight); //левая ракетка
  ctx.fillStyle = "#0000cc";
  ctx.fillRect(W - rocketWidth, Rocket2Y, rocketWidth, rocketHeight); //правая ракетка

  //Отрисовка мячика
  ctx.fillStyle = "#ff0000"; //Цвет мячика
  ctx.beginPath(); //Удаление предыдущих отрисовок мячика
  ctx.arc(ballX, ballY, ballRadius, 0, 6.28, false); //Рисование мяччика
  ctx.closePath(); //Замыкание мячика
  ctx.fill();
}

function updateView() {
  render();

  ballX += speedX;
  ballY += speedY;

  //Проверка пола
  if (ballY + ballRadius > H) {
    speedY = -speedY; //Если мяч ударился о пол, меняем скорость на противоположную
  }
  //Проверка потолка
  if (ballY - ballRadius < 0) {
    speedY = -speedY;
  }
  //Проверка правой стены
  if (ballX + ballRadius === W - rocketWidth && ballY > Rocket2Y && ballY - ballRadius < Rocket2Y + rocketHeight) {
    speedX = -speedX;
  }
  if (ballX + ballRadius > W) {
    speedX = 0;
    speedY = 0;
    stop();
    document.getElementById("leftPlayer").innerHTML++;//Присваивание очков первому игроку
  }

  //Проверка левой стены
  if (ballX - ballRadius === rocketWidth && ballY + ballRadius > Rocket1Y && ballY - ballRadius < Rocket1Y + rocketHeight) {
    speedX = -speedX;
  }
  if (ballX - ballRadius < 0) {
    speedX = 0;
    speedY = 0;
    stop();
    document.getElementById("rightPlayer").innerHTML++;//Присваивание очков второму игроку
  }

  if (action == true) {
    moveRockets();
  }
}

let leftRocUP = false;
let leftRocDOWN = false;
let rightRocUP = false;
let rightRocDOWN = false;

//Движение ракеток
function moveRockets() {
  if (leftRocUP) {
    Rocket1Y -= step;
    if (Rocket1Y < 0) {
      Rocket1Y = 0;
    }
  }
  if (leftRocDOWN) {
    Rocket1Y = Rocket1Y + step;
    if (Rocket1Y + rocketHeight > H) {
      Rocket1Y = H - rocketHeight;
    }
  }
  if (rightRocUP) {
    Rocket2Y -= step;
    if (Rocket2Y < 0) {
      Rocket2Y = 0;
    }
  }
  if (rightRocDOWN) {
    Rocket2Y = Rocket2Y + step;
    if (Rocket2Y + rocketHeight > H) {
      Rocket2Y = H - rocketHeight;
    }
  }
}

//Движение по кнопкам
//При нажатии на кнопку
document.onkeydown = function (event) {
  if (event.keyCode === 87) { leftRocUP = true } // W
  if (event.keyCode === 83) { leftRocDOWN = true } // S
  if (event.keyCode === 38) { rightRocUP = true } // Стрелка вверх
  if (event.keyCode === 40) { rightRocDOWN = true } // Стрелка вниз
};
//Если кнопку отпустили
document.onkeyup = function (event) {
  if (event.keyCode === 87) { leftRocUP = false } // W
  if (event.keyCode === 83) { leftRocDOWN = false } // S
  if (event.keyCode === 38) { rightRocUP = false } // Стрелка вверх
  if (event.keyCode === 40) { rightRocDOWN = false }// Стрелка вниз
};

//Сброс на начальные настройки
function reset() {
  ballX = W / 2;
  ballY = H / 2;
  speedX = randomXNumber();
  speedY = randomYNumber(-1, 1);
  Rocket1Y = H / 2 - rocketHeight / 2;
  Rocket2Y = H / 2 - rocketHeight / 2;
}
