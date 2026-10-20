---
title: Ladiocast 1.0.0 Released
date: 2026-10-18
---

# Ladiocast 1.0.0 Released

![Ladiocast 1.0.0 released in MAS](/images/Ladiocast-1.0.0-released-in-MAS.png)

Ladiocast 1.0.0 is now available in the [Mac App Store](https://apps.apple.com/app/ladiocast/id411213048). It is the first update since 0.13.0 in October 2018. Thank you very much for waiting so patiently, and thank you to everyone who took part in the TestFlight test.

The release candidate test is over. There is no change from 1.0.0-rc.2 in the app itself.

Changes from version 0.13.0 to 1.0.0 are as follows:

* Supports macOS 13 Ventura and later.
* Rebuilt as a universal app for Intel x86_64 and Apple silicon.
* Rewrote RTMP Streamer to use librtmp.
* Added HE-AAC and MP3 encoding formats to RTMP Streamer, in addition to AAC.
* Updated the libmp3lame library to version 3.101.
* Updated the libopus library to version 1.6.1.
* Changed the default system sample rate from 44,100 Hz to 48,000 Hz.
* Removed the Character Set selection from Icecast Streamer.
* Improved the audio quality of the mixer.
* Added German, French, Spanish, Italian, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese localizations.
* Fixed a bug that disconnecting just after a communication error could hang.
* Fixed a bug that a monaural input device was not automatically mapped to both the left and right channels.
* Fixed a bug that the app crashed at launch when a selected audio device failed to start (set to No Device with an alert).

See the [ChangeLog](/changelog) for the complete list.

How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Finally, I would like to express my deepest gratitude to Anthropic Claude Sonnet 5.5 and Opus 5.5, whose abilities made an enormous contribution to getting this release out the door.
