# How to use

## Broadcasting

Ladiocast makes it possible to broadcast by using just one mic, also advanced audio routing with its mixer.

### Notice

Further explanation about how to set up for broadcasting hasn't been described here yet. Some are provided in my blog and as some web contents by others (thank you!).

## Loopback Streamer

Select “Loopback” in the streamer menu to make a streamer which sends the audio to no server, but to the other applications on this Mac. While Ladiocast is running and the streamer is selected, an audio input device named “Ladiocast Loopback” is available. Only one streamer can be Loopback at a time: while a streamer is Loopback, “Loopback” is dimmed in the menu of the other streamers. Choose it as the audio input of a recording or streaming application, and that application receives the same audio as the other streamers do (the output of the Main bus).

The device appears when the streamer is selected, and disappears when another type of streamer is selected or Ladiocast quits. The audio is passed all the while the streamer is selected, so there is no “Connect” button. The `connect` and `disconnect` commands of the AppleScript interface have no effect on it. If an error is shown, selecting “Loopback” again in the same menu makes the device again.

### Notice

macOS 14.2 or later is required. On earlier versions, “Loopback” is not in the streamer menu, and a streamer saved as Loopback (including one read from a configuration file) becomes N/A.

The device cannot be the default input of the system, so it is not listed in “System Settings” > “Sound” > “Input”. Choose it in the audio input setting of the receiving application instead. Audio MIDI Setup lists it.

Loopback Streamer uses the system audio recording of macOS. The application which receives the audio must be allowed to use it, while Ladiocast itself needs no permission and does not ask for it. You can check the permissions in “System Settings” > “Privacy & Security” > “Screen & System Audio Recording”.

**If the receiving application is not allowed, the device is silent to it without any error message, and Ladiocast cannot detect it.** Check the level meter of the receiving application while recording. An application which does not ask for the permission (for example, OBS Studio 32.2.2) is not listed there, so add it to “System Audio Recording Only” in the same pane with the + button.

If Ladiocast quits abnormally, the device remains, even after the Mac restarts, until Ladiocast is launched next time. If you no longer use Ladiocast, select the device in Audio MIDI Setup and delete it with the − button.

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
