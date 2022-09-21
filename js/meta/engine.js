// engine is the main game loop

var Engine = {

  lastTime: 0,
  clocks: [],
  onTick: function ( currentTime ) {
    for (var i = 0; i < Engine.clocks.length; i++) {
      Engine.clocks[i].tick(currentTime);
    }

    Engine.lastTime = currentTime;
    window.requestAnimationFrame(Engine.onTick);
  },

  registerClock: function ( path, interval ) {
    var clock = new Clock(path, Engine.lastTime, interval, true, function () {
      console.log('tick');
    });
    Engine.clocks.push(clock);
  }
}

window.onload = function() {
  window.requestAnimationFrame(Engine.onTick);
};
