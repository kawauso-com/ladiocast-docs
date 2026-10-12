# How to use

## Broadcasting

Ladiocast makes it possible to broadcast by using just one mic, also advanced audio routing with its mixer.

### Notice

Further explanation about how to set up for broadcasting hasn't been described here yet. Some are provided in my blog and as some web contents by others (thank you!).

## The audio mixer

### The diagram

You can set up four audio input devices and four(Main, Aux 1, Aux 2, Aux 3) outputs in the Ladiocast mixer. Audio signals coming from the input devices can be sent to Main and/or Aux buses by button switching. All signal lines have volume sliders on input side and output side.

The total mixer's diagram is as follows:

![Mixer diagram](/images/audioDiagram.png)

### Volume slider scales

In input volume slider scales, the left end indicates minus infinite dB, the right end the stepper selected dB. In output volume slider scales, the left end indicates minus infinite dB, the right end 0dB.

## Preferences

Select “Preferences” in the menu bar to show Ladiocast preferences window.

If you increase the “Sample Frame Length” value, latency in the audio processing of Ladiocast will get longer, the CPU load average will get lower. If you decrease, the latency will get shorter, the load average will get higher, and the audio is more likely to drop out for a moment (heard as a click) while the Mac is busy. The default is 256. At 48000 Hz, the latency inside Ladiocast is about 27 ms with 256 and about 13 ms with 128. Choose 128 or less only if you need the shorter latency, and check for clicks on your Mac before going on air.

The “System Sample Rate” is used as internal sample rate. There is possibility to get finer audio processing, which also depends on rates of inputs devices.

The default of the system sample rate was changed from 44100 to 48000. It is applied only when the preferences have not been saved yet, so existing users keep their current value. The Ogg Vorbis and Ogg PCM formats use the system sample rate as their encoding sample rate, so set it to 44100 in the preferences panel if you need to stream with 44100.

The “Number of Streamers”is the maximum streamers available simultaneously. The more number specified, the higher CPU load will get.

To enable new settings, you need to restart the application.
