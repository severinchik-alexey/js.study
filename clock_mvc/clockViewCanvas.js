export class ViewCanvas {
    start(field) {
      let divClock = field.querySelector('.divClock');
      this.canvas = document.createElement('canvas');
      divClock.append(this.canvas);
      this.canvas.width = 350;
      this.canvas.height = 350;
    }
    update(offset) {
      drawClock(this.canvas, offset);
    }
  }
  
  function drawClock(canvas, offset) {
    let cnt = canvas.getContext('2d');
    let cnv = {
      width: canvas.width,
      height: canvas.height,
      сenterX: canvas.width / 2,
      сenterY: canvas.height / 2,
      ratio: 0.9
    };
    let clock = {
      width: cnv.ratio * cnv.width,
      height: cnv.ratio * cnv.width,
      radius: (cnv.ratio * cnv.width) / 2,
      littleRad: 23
    };
    clearCnv(cnt, cnv);
    drawCircle(cnt, cnv, clock);
    drawLittleCircle(cnt, cnv, clock);
    drawNumbers(cnt, cnv, clock);
    drawArrow(cnt, cnv, 70, 6, 'black', offset);
    drawArrow(cnt, cnv, 90, 4, 'blue');
    drawArrow(cnt, cnv, 110, 2, 'red');
    drawTextTime(cnt, cnv, offset);
  }
  
  function clearCnv(cnt, cnv) {
    cnt.clearRect(0, 0, cnv.width, cnv.height);
  }
  
  function drawCircle(cnt, cnv, clock) {
    cnt.fillStyle = 'rgb(253, 251, 103)';
    cnt.beginPath();
    cnt.arc(cnv.сenterX, cnv.сenterY, clock.radius, 0, Math.PI * 2, false);
    cnt.fill();
    cnt.strokeStyle = 'rgb(0, 0, 0)';
    cnt.lineWidth = 2;
    cnt.stroke();
  }
  
  function drawLittleCircle(cnt, cnv, clock) {
    for (let i = 1; i <= 12; i++) {
      let numberRadius = clock.radius * 0.77;
      let numberX = cnv.width / 2 + numberRadius * Math.sin(i * 0.523);
      let numberY = cnv.height / 2 - numberRadius * Math.cos(i * 0.523);
      cnt.fillStyle = 'rgb(81, 231, 93)';
      cnt.beginPath();
      cnt.arc(numberX, numberY, clock.littleRad, 0, Math.PI * 2, false);
      cnt.fill();
    }
  }
  
  function drawNumbers(cnt, cnv, clock) {
    for (let i = 1; i <= 12; i++) {
      let numberRadius = clock.radius * 0.77;
      let numberX = cnv.width / 2 + numberRadius * Math.sin(i * 0.523);
      let numberY = cnv.height / 2 - numberRadius * Math.cos(i * 0.523);
      cnt.font = 'italic 500 26px Arial';
      cnt.textAlign = 'center';
      cnt.textBaseline = 'middle';
      cnt.fillStyle = 'rgb(0, 0, 0)';
      cnt.fillText(`${i}`, numberX, numberY + 2);
    }
  }
  
  function drawArrow(cnt, cnv, length, width, color, offset) {
    cnt.strokeStyle = color;
    cnt.lineWidth = width;
    cnt.lineCap = 'round';
    cnt.beginPath();
    cnt.moveTo(cnv.сenterX, cnv.сenterY);
    let coord = getCoord(length, cnv, offset);
    cnt.lineTo(coord.x, coord.y);
    cnt.stroke();
  }
  
  function drawTextTime(cnt, cnv, offset) {
    let period = formatDateTime(offset);
    let index = 0.35;
    cnt.font = 'italic bold 24px Arial';
    cnt.textAlign = 'center';
    cnt.textBaseline = 'middle';
    cnt.fillStyle = 'rgb(0, 0, 0)';
    cnt.fillText(`${period}`, cnv.сenterX, cnv.height * index);
  }
  function getCoord(length, cnv, offset) {
    let angle = getAngle(length, offset);
    let radians = (angle * Math.PI) / 180;
    let coordX = cnv.сenterX + length * Math.sin(radians);
    let coordY = cnv.сenterY - length * Math.cos(radians);
    return { x: coordX, y: coordY };
  }
  function getAngle(length, offset) {
    let time = getDate(offset);
    if (length === 70) {
      return (time.hour + time.min / 60 + time.sec / 3600) * 30;
    }
    if (length === 90) {
      return time.min * 6;
    }
    if (length === 110) {
      return time.sec * 6;
    }
  }
  function formatDateTime(offset) {
    let time = getDate(offset);
    let content = `${addZero(time.hour)}:${addZero(time.min)}:${addZero(
      time.sec
    )}`;
    return content;
  }
  function getDate(offset) {
    let now = new Date();
    return {
      hour: now.getUTCHours() + offset,
      min: now.getUTCMinutes(),
      sec: now.getUTCSeconds()
    };
  }
  function addZero(val) {
    let elem = val.toString();
    if (elem.length < 2) {
      elem = `0${elem}`;
    }
    return elem;
  }