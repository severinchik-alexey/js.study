export class Model {
    constructor(offset) {
      this.offset = offset;
      // this.stop = function() {
      //   clearInterval(this.timer);
      //   this.timer = null;
      // };
      // this.start = function() {
      //   this.timer = setInterval(() => {
      //     this.myView.update(this.offset);
      //   }, 1000);
      // };
    }
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
    start() {
      this.timer = setInterval(() => {
        this.myView.update(this.offset);
      }, 1000);
    }
    begin(view) {
      this.myView = view;
    }
    updateView() {
      if (this.myView) {
        this.myView.update(this.offset);
      }
    }
  }