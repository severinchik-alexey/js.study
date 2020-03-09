import { Model } from './clockModel.js';
import { ViewCanvas } from './clockViewCanvas.js';
import { ViewSvg } from './clockViewSVG.js';
import { Controller } from './clockControllerButtons.js';

let clock1 = new Model(-5);
let clock2 = new Model(0);
let clock3 = new Model(+1);
let clock4 = new Model(+3);

let clockCanvas1 = new ViewCanvas();
let clockCanvas2 = new ViewCanvas();
let clockSvg1 = new ViewSvg();
let clockSvg2 = new ViewSvg();

let controller1 = new Controller(clock1);
let controller2 = new Controller(clock2);
let controller3 = new Controller(clock3);
let controller4 = new Controller(clock4);

let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let container3 = document.getElementById('container3');
let container4 = document.getElementById('container4');

clock1.begin(clockCanvas1);
clockCanvas1.start(container1);
controller1.begin(container1);
clock1.updateView();

clock2.begin(clockCanvas2);
clockCanvas2.start(container2);
controller2.begin(container2);
clock2.updateView();

clock3.begin(clockSvg1);
clockSvg1.start(container3);
controller3.begin(container3);
clock3.updateView();

clock4.begin(clockSvg2);
clockSvg2.start(container4);
controller4.begin(container4);
clock4.updateView();