# submono
A Web Audio subtractive, monophonic synthesizer. Looking for polyphony? Check out [subpoly](https://github.com/okaybenji/subpoly)!

### Create a synth.
```
var audioCtx = new AudioContext();
var synth = new Monosynth(audioCtx);
```

### Play a note.
`synth.start();`

### Stop playing.
`synth.stop();`

### Use methods to access pitch and waveform...
```
synth.pitch(440);              // in hertz
console.log(synth.waveform()); // 'sawtooth' (or sine, triangle, square)
```

### ...get or set any other properties directly.
```
synth.maxGain = 0.5; // out of 1
synth.attack = 1.0;  // in seconds
```

### Configure any or all the properties on initialization.
```
var config = {
  waveform: 'sawtooth', // or sine, triangle, square
  pitch: 440,           // in hertz
  maxGain: 0.5,         // out of 1
  attack: 0.1,          // in seconds
  decay: 0.0,           // in seconds
  sustain: 1.0,         // out of 1
  release: 0.8,         // in seconds
  cutoff: {
    maxFrequency: 7500, // in hertz
    attack: 0.1,        // in seconds
    decay: 2.5,         // in seconds
    sustain: 0.2        // 0-5; maxFrequency multiplied by this
  }
};

var synth = new Monosynth(audioCtx, config);
```

### Demo
[Tiles: a musical, multiplayer web toy](http://okaybenji.github.io/tiles-client/)
