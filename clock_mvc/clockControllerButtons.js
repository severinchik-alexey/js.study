export class Controller {
    constructor(model) {
    this.stopClock = function() {
      model.stop();
    };
    this.startClock = function() {
      model.start();
    };
  }
  begin(field) {
    this.myField = field;
    window.addEventListener('load', this.startClock);
    this.stop = this.myField.querySelector('.stop');
    this.stop.addEventListener('click', this.stopClock);
    this.start = this.myField.querySelector('.start');
    this.start.addEventListener('click', this.startClock);
  }
}