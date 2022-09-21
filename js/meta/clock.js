
class Clock {

  constructor ( path, startTime, maxValue, repeat, callback ) {
    this.path = path;
    this.startTime = startTime;
    this.maxValue = maxValue;
    this.repeat = repeat;
    this.callback = callback;

    this.radius = 0.9;
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

    var x = this.radius * Math.cos(angle);
    var y = this.radius * Math.sin(angle);

    this.path.setAttribute(
      'd',
      [
      'M 0', -this.radius,
      'A', this.radius, this.radius,
        '0', this.currentValue > 0.5 ? 1 : 0, '1',
        x, y
    ].join(' ')
    )
  }
}
