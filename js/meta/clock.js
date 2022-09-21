
class Clock {
  constructor ( path, startTime, maxValue, repeat, callback ) {
    this.path = path;
    this.startTime = startTime;
    this.maxValue = maxValue;
    this.repeat = repeat;
    this.callback = callback;
  }

  tick ( currentTime ) {
    this.currentValue = (currentTime - this.startTime) / this.maxValue;
    if (this.currentValue > 1) {
        this.currentValue = this.repeat ? this.currentValue % 1 : 1;
        this.startTime = this.startTime + this.maxValue;
        this.callback();
    }
    this.render();
  }
  render ( ) {
    // angle, clockwise starting at the top
    var angle = this.currentValue * 2 * Math.PI - Math.PI/2;

    var x = 50 * Math.cos(angle);
    var y = 50 * Math.sin(angle);

    console.log(`currentValue: ${this.currentValue}, angle: ${angle/Math.PI*180}, x: ${x}, y: ${y}`);

    this.path.setAttribute(
      'd',
      [
      'M 0 -50',
      'A 50 50 0',
      this.currentValue > 0.5 ? 1 : 0,
      '1',
      x,
      y
    ].join(' ')
    )
  }
}
