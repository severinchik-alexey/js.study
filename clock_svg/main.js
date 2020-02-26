let clockSVG = document.getElementById("clock");
clockSVG.style.position = "relative";
let clock = document.createElementNS("http://www.w3.org/2000/svg",'circle');
clock.setAttribute("stroke","green");
clock.setAttribute("fill","gold");
clock.setAttribute("r",200);
clock.setAttribute("cx",400);
clock.setAttribute("cy",300);
clockSVG.append(clock);

for (let i = 1; i <= 12; i++) {
  let digit = document.createElementNS("http://www.w3.org/2000/svg",'circle');
  clockSVG.append(digit);
  digit.append(i);
  digit.setAttribute("stroke","green");
  digit.setAttribute("fill","yellow");
  digit.setAttribute("r",20);
  digit.style.position = "absolute";
  
  switch (i) {
    case 1:
        digit.setAttribute("cx",470);
        digit.setAttribute("cy",170);
      break;

    case 2:
        digit.setAttribute("cx",530);
        digit.setAttribute("cy",230);
      break;

    case 3:
        digit.setAttribute("cx",560);
        digit.setAttribute("cy",300);
      break;

    case 4:
        digit.setAttribute("cx",530);
        digit.setAttribute("cy",370);
      break;

    case 5:
        digit.setAttribute("cx",470);
        digit.setAttribute("cy",430);
      break;

    case 6:
        digit.setAttribute("cx",400);
        digit.setAttribute("cy",460);
      break;

    case 7:
        digit.setAttribute("cx",330);
        digit.setAttribute("cy",430);
      break;

    case 8:
        digit.setAttribute("cx",270);
        digit.setAttribute("cy",370);
      break;

    case 9:
        digit.setAttribute("cx",240);
        digit.setAttribute("cy",300);
      break;

    case 10:
        digit.setAttribute("cx",270);
        digit.setAttribute("cy",230);
      break;

    case 11:
        digit.setAttribute("cx",330);
        digit.setAttribute("cy",170);
      break;

    case 12:
        digit.setAttribute("cx",400);
        digit.setAttribute("cy",140);
      break;
  }
}
let hour = document.createElementNS("http://www.w3.org/2000/svg",'line');
hour.setAttribute("x1",400);
hour.setAttribute("y1",300);
hour.setAttribute("x2",400);
hour.setAttribute("y2",180);
hour.setAttribute("stroke","black");
hour.setAttribute("stroke-width","20");
clockSVG.append(hour);

let minute = document.createElementNS("http://www.w3.org/2000/svg",'line');
minute.setAttribute("x1",400);
minute.setAttribute("y1",300);
minute.setAttribute("x2",400);
minute.setAttribute("y2",140);
minute.setAttribute("stroke","black");
minute.setAttribute("stroke-width","10");
clockSVG.append(minute);

let secunde = document.createElementNS("http://www.w3.org/2000/svg",'line');
secunde.setAttribute("x1",400);
secunde.setAttribute("y1",300);
secunde.setAttribute("x2",400);
secunde.setAttribute("y2",120);
secunde.setAttribute("stroke","red");
secunde.setAttribute("stroke-width","5");
clockSVG.append(secunde);

let boltik = document.createElementNS("http://www.w3.org/2000/svg",'circle');
boltik.setAttribute("stroke","green");
boltik.setAttribute("fill","gold");
boltik.setAttribute("r",15);
boltik.setAttribute("cx",400);
boltik.setAttribute("cy",300);
clockSVG.append(boltik);

clockRefresh()
function clockRefresh() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  secunde.style.cssText = "transform-origin: 57% 43%;"; 
  minute.style.cssText = "transform-origin: 57% 43%;"; 
  hour.style.cssText = "transform-origin: 57% 43%;"; 
  secunde.style.transform = `rotate(${seconds * 6}deg)`;
  minute.style.transform = `rotate(${minutes * 6}deg)`;
  hour.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
}

setInterval(clockRefresh, 1000);