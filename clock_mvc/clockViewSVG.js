export class ViewSvg {
    start(field) {
      let divClock = field.querySelector('.divClock');
      this.svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgTag.setAttribute('height', 350);
      this.svgTag.setAttribute('width', 350);
      divClock.append(this.svgTag);
    }
    update(offset) {
      if (!this.svgTag.children.length) {
        drawClock(this.svgTag);
      }
      updateTime(this.svgTag, offset);
    }
  }
  
  function drawClock(svgTag) {
    let svgWidth = svgTag.getAttribute('width');
    let svgHeight = svgTag.getAttribute('height');
    let svg = {
      teg: svgTag,
      width: svgWidth,
      height: svgHeight,
      centerX: svgWidth / 2,
      centerY: svgHeight / 2,
      clockWidth: svgWidth * 0.9,
      clockHeight: svgHeight * 0.9,
      littleRad: 23
    };
    drawCircle(svg);
    drawText(svg);
    drawLittleCircle(svg);
    drawHour(svg);
    drawArrowHour(svg, 'black');
    drawArrowMin(svg, 'blue');
    drawArrowSec(svg, 'red');
  }
  function drawCircle(svg) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('stroke', 'rgb(0, 0, 0)');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('fill', 'rgb(253, 251, 103)');
    circle.setAttribute('r', svg.clockWidth / 2);
    circle.setAttribute('cx', svg.centerX);
    circle.setAttribute('cy', svg.centerY);
    svg.teg.append(circle);
  }
  function drawText(svg) {
    let txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', svg.centerX);
    txt.setAttribute('y', svg.height * 0.35);
    txt.style.fontSize = '22';
    txt.style.fontWeight = 'bold';
    txt.style.fill = 'rgb(0, 0, 0)';
    txt.setAttribute('class', 'time');
    txt.style.textAnchor = 'middle';
    svg.teg.append(txt);
  }
  function drawLittleCircle(svg) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('fill', 'rgb(81, 231, 93)');
    circle.setAttribute('r', svg.littleRad);
    circle.setAttribute('cx', svg.centerX);
    circle.setAttribute('cy', 0.155 * svg.clockWidth);
    svg.teg.append(circle);
    for (let i = 0; i < 360; i += 30) {
      let nextElem = circle.cloneNode(true);
      nextElem.setAttribute(
        'transform',
        `rotate(${i} ${svg.centerX}  ${svg.centerY})`
      );
      svg.teg.append(nextElem);
    }
  }
  function drawHour(svg) {
    let hour = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    hour.setAttribute('x', svg.centerX);
    hour.setAttribute('y', svg.centerY - (0.75 * svg.clockHeight) / 2);
    hour.style.fill = 'rgb(0, 0, 0)';
    hour.id = 'hour';
    hour.textContent = '1';
    hour.style.fontSize = '24';
    hour.style.fontWeight = 'bold';
    hour.style.textAnchor = 'middle';
    for (let i = 30; i <= 360; i += 30) {
      let nextElem = hour.cloneNode(true);
      let radians = (i * Math.PI) / 180;
      let radiusForNumber = 0.4 * svg.clockWidth;
      let textCenterX = svg.width / 2 + radiusForNumber * Math.sin(radians);
      let textCenterY = svg.height / 2 - radiusForNumber * Math.cos(radians);
      nextElem.setAttribute('x', textCenterX);
      nextElem.setAttribute('y', textCenterY + 7);
      hour.textContent++;
      svg.teg.append(nextElem);
    }
  }
  function drawArrowHour(svg, color) {
    let arrowHour = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );
    arrowHour.setAttribute('x1', svg.centerX);
    arrowHour.setAttribute('y1', svg.centerY);
    arrowHour.setAttribute('x2', svg.centerX);
    arrowHour.setAttribute('y2', 0.4 * svg.clockHeight);
    arrowHour.setAttribute('stroke', color);
    arrowHour.setAttribute('stroke-width', 7);
    arrowHour.setAttribute('stroke-linecap', 'round');
    arrowHour.setAttribute('class', 'arrowHour');
    svg.teg.append(arrowHour);
  }
  function drawArrowMin(svg, color) {
    let arrowMin = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrowMin.setAttribute('x1', svg.centerX);
    arrowMin.setAttribute('y1', svg.centerY);
    arrowMin.setAttribute('x2', svg.centerX);
    arrowMin.setAttribute('y2', 0.35 * svg.clockHeight);
    arrowMin.setAttribute('stroke', color);
    arrowMin.setAttribute('stroke-width', 4);
    arrowMin.setAttribute('stroke-linecap', 'round');
    arrowMin.setAttribute('class', 'arrowMin');
    svg.teg.append(arrowMin);
  }
  function drawArrowSec(svg, color) {
    let arrowSec = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrowSec.setAttribute('x1', svg.centerX);
    arrowSec.setAttribute('y1', svg.centerY);
    arrowSec.setAttribute('x2', svg.centerX);
    arrowSec.setAttribute('y2', 0.3 * svg.clockHeight);
    arrowSec.setAttribute('stroke', color);
    arrowSec.setAttribute('stroke-width', 2);
    arrowSec.setAttribute('stroke-linecap', 'round');
    arrowSec.setAttribute('class', 'arrowSec');
    svg.teg.append(arrowSec);
  }
  
  function updateTime(svgTag, offset) {
    let now = new Date();
    let time = {
      hour: now.getUTCHours() + offset,
      min: now.getUTCMinutes(),
      sec: now.getUTCSeconds()
    };
    updateClockTime(svgTag, time);
    updateTextTime(svgTag, time);
  }
  
  function updateClockTime(svgTag, time) {
    let svgWidth = svgTag.getAttribute('width');
    let svgHeight = svgTag.getAttribute('height');
    let arrowHour = svgTag.querySelector('.arrowHour');
    let arrowMin = svgTag.querySelector('.arrowMin');
    let arrowSec = svgTag.querySelector('.arrowSec');
    let angleSec = time.sec * 6;
    let angleMin = time.min * 6;
    let angleHour = (time.hour + time.min / 60 + time.sec / 3600) * 30;
    arrowSec.setAttribute(
      'transform',
      `rotate(${angleSec} ${svgWidth / 2} ${svgHeight / 2})`
    );
    arrowMin.setAttribute(
      'transform',
      `rotate(${angleMin} ${svgWidth / 2} ${svgHeight / 2})`
    );
    arrowHour.setAttribute(
      'transform',
      `rotate(${angleHour} ${svgWidth / 2} ${svgHeight / 2})`
    );
  }
  function updateTextTime(svgTag, time) {
    let text = svgTag.querySelector('.time');
    text.textContent = formatDateTime(time);
  }
  function formatDateTime(time) {
    let content = `${addZero(time.hour)}:${addZero(time.min)}:${addZero(
      time.sec
    )}`;
    return content;
  }
  function addZero(val) {
    let strVal = val.toString();
    while (strVal.length < 2) strVal = '0' + strVal;
    return strVal;
  }