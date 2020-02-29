const svgNS = "http://www.w3.org/2000/svg";
const svg = document.getElementById("svg");
const w = parseFloat(svg.getAttribute("width"));
const h = parseFloat(svg.getAttribute("height"));
const yellowR = w / 2;
const radius = 0.8 * yellowR;
const pi = Math.PI;
const cos = Math.cos;
const sin = Math.sin;

function yellowCircle() {
  let yellow = document.createElementNS(svgNS, "circle");
  yellow.setAttribute("cx", w / 2);
  yellow.setAttribute("cy", h / 2);
  yellow.setAttribute("r", w / 2);
  yellow.setAttribute("fill", "#fcca66");
  yellow.setAttribute("stroke", "none");

  svg.appendChild(yellow);
}
yellowCircle();
function greenCircle() {
  let angle = 30;
  for (i = 1; i <= 12; i++) {
    let green = document.createElementNS(svgNS, "circle");
    svg.appendChild(green);
    let angleRad = (angle * i * pi) / 180;

    let greenCenterX = yellowR + radius * sin(angleRad);
    let greenCenterY = yellowR - radius * cos(angleRad);

    green.setAttribute("cx", greenCenterX);
    green.setAttribute("cy", greenCenterY);
    green.setAttribute("r", 45);
    green.setAttribute("fill", "#48b382");
  }
}
greenCircle();

function numbers() {
  let angle = 30;
  for (i = 1; i <= 12; i++) {
    let text = document.createElementNS(svgNS, "text");
    svg.appendChild(text);
    text.textContent = i;
    let angleRad = (angle * i * pi) / 180;
    let textCenterX = yellowR + radius * sin(angleRad);
    let textCenterY = yellowR - radius * cos(angleRad);
    text.setAttribute("x", textCenterX);
    text.setAttribute("y", textCenterY);
    text.style.fontSize = "50";
    text.style.fontWeight = "bold";
    text.style.textAnchor = "middle";
  }
}
numbers();

function lines() {
  let hourLine = document.createElementNS(svgNS, "line");
  hourLine.setAttribute("x1", w / 2);
  hourLine.setAttribute("x2", w / 2);
  hourLine.setAttribute("y1", w / 2);
  hourLine.setAttribute("y2", 100);
  hourLine.setAttribute("stroke", "black");
  hourLine.setAttribute("stroke-width", 8);
  hourLine.setAttribute("id", "hours");
  hourLine.setAttribute("stroke-linecap", "round");
  svg.appendChild(hourLine);
  let minLine = document.createElementNS(svgNS, "line");
  minLine.setAttribute("x1", w / 2);
  minLine.setAttribute("x2", w / 2);
  minLine.setAttribute("y1", w / 2);
  minLine.setAttribute("y2", 60);
  minLine.setAttribute("stroke", "blue");
  minLine.setAttribute("stroke-width", 4);
  minLine.setAttribute("id", "minutes");
  minLine.setAttribute("stroke-linecap", "round");
  svg.appendChild(minLine);
  let secLine = document.createElementNS(svgNS, "line");
  secLine.setAttribute("x1", w / 2);
  secLine.setAttribute("x2", w / 2);
  secLine.setAttribute("y1", w / 2);
  secLine.setAttribute("y2", 70);
  secLine.setAttribute("stroke", "red");
  secLine.setAttribute("stroke-width", 2);
  secLine.setAttribute("id", "seconds");
  secLine.setAttribute("stroke-linecap", "round");
  svg.appendChild(secLine);
}
lines();

window.onload = function operation() {
  setInterval(fSec, 1000);

  function fSec() {
    let hourArr = document.getElementById("hours");
    let minArr = document.getElementById("minutes");
    let secArr = document.getElementById("seconds");
    let now = new Date();
    let sec = now.getSeconds() * 6;
    let min = now.getMinutes() * 6;
    let hour = (now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600) * 30;
    secArr.setAttribute("transform", "rotate(" + sec + " 300 300)");
    minArr.setAttribute("transform", "rotate(" + min + " 300 300)");
    hourArr.setAttribute("transform", "rotate(" + hour + " 300 300)");
  }
}
