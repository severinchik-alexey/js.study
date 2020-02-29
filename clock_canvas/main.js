let radius = 220;
let angle = 30; 
let yellowR = 300; 
let greenR = 40;
let secLength = 290;
let minLength = 180;
let hourLength = 150;
const pi = Math.PI;
const sin = Math.sin;
const cos = Math.cos;

let clock = document.getElementById("clock");
let ctx = clock.getContext('2d');

function drawClock() {
    ctx.beginPath();
    ctx.arc(300, 300, 300, 0, 2 * pi);
    ctx.fillStyle = "#fcca66";
    ctx.fill();

    for (let i = 1; i <= 12; i++) {
        let angleRad = angle * i * 2 * pi / 360;
        let greenCenterX = yellowR + radius * sin(angleRad);
        let greenCenterY = yellowR - radius * cos(angleRad);
        ctx.beginPath();
        ctx.arc(greenCenterX, greenCenterY, greenR, 0, 2 * pi);
        ctx.fillStyle = "#48b382";
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "normal bold 40px Arial";
        ctx.fillText(i, greenCenterX, greenCenterY);
    }

    let now = new Date;
    let sec = now.getSeconds() * 6 - 90;
    let min = now.getMinutes() * 6 - 90; 
    let hour = (now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600) * 30 - 90;
    let secX, minX, hourX;
    let secY, minY, hourY;

    let secRad = sec * 2 * pi / 360;
    let minRad = min * 2 * pi / 360;
    let hourRad = hour * 2 * pi / 360;

    secX = yellowR + secLength * cos(secRad);
    secY = yellowR + secLength * sin(secRad);

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.moveTo(300, 300);
    ctx.lineTo(secX, secY);
    ctx.stroke();

    minX = yellowR + minLength * cos(minRad);
    minY = yellowR + minLength * sin(minRad);

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 4;
    ctx.moveTo(300, 300);
    ctx.lineTo(minX, minY);
    ctx.stroke();

    hourX = yellowR + hourLength * cos(hourRad);
    hourY = yellowR + hourLength * sin(hourRad);

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.moveTo(300, 300);
    ctx.lineTo(hourX, hourY);
    ctx.stroke();
}

setInterval(drawClock, 1000);
