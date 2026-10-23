# ChangeLog

| Version | Topic |
|:---|:---|
| 1.1.0 | Released in the Mac App Store. |
| 1.1.0-beta.2 | Ladiocast itself no longer asks for system audio recording: only the application which receives the audio from Loopback Streamer needs the permission. The alert about a silent loopback device was removed with it. |
| 1.1.0-beta.1 | Renamed the input device of Loopback Streamer to "Ladiocast Loopback". |
| 1.1.0-beta.0 | Added Loopback Streamer, which passes the audio to other applications on this Mac as an input device named "Ladiocast Loopback Streamer", instead of sending it to a server. Only one streamer can be Loopback at a time (macOS 14.2 and later). |
| 1.1.0-beta.0 | Added the usage description of system audio recording, which Loopback Streamer needs. |
| 1.0.0 | Released in the Mac App Store. |
| 1.0.0-rc.2 | Added an error message for RTMPE and RTMPTE URLs in RTMP Streamer, which are not supported. |
| 1.0.0-rc.2 | Removed the leftover Character Set field from the Icecast Streamer window. |
| 1.0.0-rc.1 | Fixed a bug that ReadMe and ChangeLog in the Help menu were blank when the app was launched in a language other than English or Japanese (English is now shown). |
| 1.0.0-rc.1 | Unified the wording of the Main and Aux output labels across the localizations. |
| 1.0.0-rc.0 | Fixed a bug that the app crashed at launch when a selected audio device failed to start (set to No Device with an alert). |
| 1.0.0-rc.0 | Added German, French, Spanish, Italian, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese localizations. |
| 1.0.0-beta.0 | Improved the audio quality of the mixer. |
| 1.0.0-alpha.0 | Updated the libopus library to version 1.6.1. |
| 1.0.0-alpha.0 | Fixed a bug that a monaural input device was not automatically mapped to both the left and right channels. |
| 1.0.0-alpha.0 | Fixed a bug that disconnecting just after a communication error could hang. |
| 1.0.0-alpha.0 | Removed the Character Set selection from Icecast Streamer. |
| 1.0.0-alpha.0 | Changed the default system sample rate from 44,100 Hz to 48,000 Hz. |
| 1.0.0-alpha.0 | Updated the libmp3lame library to version 3.101. |
| 1.0.0-alpha.0 | Added HE-AAC and MP3 encoding formats to RTMP Streamer, in addition to AAC. |
| 1.0.0-alpha.0 | Rewrote RTMP Streamer to use librtmp. |
| 1.0.0-alpha.0 | Rebuilt as a universal app for Intel x86_64 and Apple silicon. |
| 1.0.0-alpha.0 | Supports macOS 13 Ventura and later. |
| 0.13.0 | Removed the ability to pan input stereo channels. |
| 0.13.0 | Enabled to map any input channel of multi-channel audio devices into stereo. |
| 0.12.6 | Updated for microphone usage description. |
| 0.12.5 | 32-bit version ended. |
| 0.12.5 | Support for Dark Mode on macOS Mojave. |
| 0.12.4 | Updated libmp3lame library to the version 3.100. |
| 0.12.4 | Improved event tab to load AppleScript inside which fixes the startup execution error on macOS 10.13. |
| 0.12.4 | Fixed some minor bugs, including Ogg Opus and Ogg PCM encoding. |
| 0.12.3 | Updated libopus library to version 1.2.1. |
| 0.12.2 | Dynamic link libraries rebuilt. |
| 0.12.1 | Added libmp3lame library version 3.99.5 inside. |
| 0.12.1 | Updated libopus library to version 1.1.5. |
| 0.12.0 | Added one more line to the audio mixer, which has now 4-in 4-out 4-bus in total. |
| 0.12.0 | Updated libopus library to the latest version 1.1.2. |
| 0.12.0 | Replaced deprecated Carbon Component Manager APIs. |
| 0.11.5 | Changed the way to save connected audio device settings. |
| 0.11.4 | Added Ogg PCM (32-bit Float) encoding format to the Icecast 2 streamer. |
| 0.11.4 | Updated libopus library to the latest version 1.1.1. |
| 0.11.3 | Updated libshout library to the latest version 2.4.1. |
| 0.11.2 | Released the latest version in the Mac App Store. |
| 0.11.1 | Implemented status menu in the menu bar and added items to change volume levels of the selected devices, open mixer and quit LadioCast. |
| 0.11.0 | Implemented SHOUTcast v1 streamer to transmit audio streaming to the SHOUTcast Server. |
| 0.10.10 | Returned to Mac App Store. |
| 0.10.9 | Added Ogg Opus encoding format in the Icecast 2 streamers. |
| 0.10.9 | Updated Ogg Vorbis libraries to the latest version. |
| 0.10.8 | Measures taken to recover from standing audio input streams after sleep. |
| 0.10.7 | Measures taken to avoid beep noise in initializing input devices. |
| 0.10.6 | Rebuilt by Xcode 6.1.1. |
| 0.10.5 | Rebuilt as a 2-way Universal Binary application for Mac OS X 10.6 and later. |
| 0.10.5 | Improved accuracy of the audio processing. |
| 0.10.5 | Improved process of drawing the level meters. |
| 0.10.5 | Supported VoiceOver in the main window. |
| 0.10.4 | Fixed a bug unable to read saved setting files. |
| 0.10.3 | Added ReadMe and ChangeLog documents into Help menu. |
| 0.10.2 | Implemented metadata values setting in RTMP streamer. |
| 0.10.1 | Implemented RTMP(Real Time Messaging Protocol) streamer to transmit audio streaming to the Flash Media Server. |
| 0.10.1 | Added more events which can be handled by user-defined AppleScript. |
| 0.10.1 | Rebuilt as a 3-way(ppc, i386, x86_64) Universal Binary application. |
| 0.10.0 | Extended streaming ability to connect to multiple servers simultaneously. |
| 0.10.0 | Enabled to run user-defined AppleScript handler when an event occurs. |
| 0.9.2 | Fixed a bug that the Output Aux 2 is not properly setup. |
| 0.9.1 | Improved in showing alert panel for scripting automation. |
| 0.9.1 | Fixed to show the main window as clicked in dock. |
| 0.9.0 | Rebuilt as a 4-way Universal Binary application for Mac OS X 10.5 and later (with 32-bit launching default). |
| 0.9.0 | Added another auxiliary output and a bus to the mixer, which has now 3-In/3-Out/3-Bus lines. |
| 0.9.0 | Added device volume controller on each output device. |
| 0.9.0 | Separated Icecast2 source client to its own window. |
| 0.9.0 | Added HE-AAC encoding format using Core Audio HE-AAC Codec (available OS X 10.6 and later). |
| 0.9.0 | Extended AppleScript command support to open, connect, disconnect. |
| 0.8.3 | Added stepper switches to adjust input gains. |
| 0.8.3 | Changed the internal clock of the audio process. |
| 0.8.3 | Enabled to change output device volume directly on the level indicator. |
| 0.8.2 | Fixed a memory leak in the audio process. |
| 0.8.1 | Added mixer switches that pan input stereo channels individually. |
| 0.8.0 | Enabled to select N/A as the main output device. |
| 0.8.0 | Enabled to select output devices of which sample rates are other than 44100 Hz. |
| 0.8.0 | Added 4 steps as encoding sample rate, 48000 Hz through 96000 Hz. |
| 0.8.0 | Enabled to change the system internal sample rate. |
| 0.7.5 | Added AAC encoding format (Core Audio AAC Codec). |
| 0.7.5 | Changed 3 steps to 8 in the sample rate value of encoding configuration. |
| 0.7.5 | Changed 10 steps to 11 in the quality level value of encoding configuration. |
| 0.7.4 | Changed fader curves of input and output volumes, marked with major scale at -infinit dB and 0dB. |
| 0.7.3 | Fixed a bug unavailable to connect with any blank connection data field. |
| 0.7.2 | Added submission of information about encoding sample rate and number of channels. |
| 0.7.2 | Improved handling of unavailable devices. |
| 0.7.1 | Fixed a bug in network communication recovery. |
| 0.7.1 | Fixed wrong submission of description field, that referred genre. |
| 0.7.0 | Discontinued "thru" function. |
| 0.7.0 | Added auxiliary output to the mixer which has now 3In/2Out/2Bus components. |
| 0.7.0 | Added AppleScript interface to set stream metadata song information. |
| 0.7.0 | Added preferences window to change audio sample frame length. |
| 0.7.0 | Improved network connection processing. |
| 0.6.2 | Added recovery process against illegal state in network communications and modified related messages. |
