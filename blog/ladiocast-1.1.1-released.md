---
title: Ladiocast 1.1.1 Released
date: 2026-11-07
---

# Ladiocast 1.1.1 Released

![Ladiocast 1.0.0 released in MAS](/images/Ladiocast-in-MAS.png)

Ladiocast 1.1.1 is now available in the [Mac App Store](https://apps.apple.com/app/ladiocast/id411213048). Thank you to everyone who took part in the TestFlight test of 1.1.1-beta.0, 1.1.1-beta.1 and 1.1.1-beta.2.

The beta test is over. The only change from 1.1.1-beta.2 in the app itself is a small fix: when you cancel the file dialog of "Choose Script…" in the Events tab of a streamer window, the menu now goes back to what was selected.

Changes from version 1.1.0 to 1.1.1 are as follows:

* The first 0.8 seconds of every input device are now discarded each time it starts, so the noise from the audio jack of a Mac no longer comes through.
* Ogg streams from Icecast Streamer no longer stop reaching listeners after auto-reconnecting.
* Icecast and Shoutcast streamers now always send the song metadata in UTF-8, keep streaming when updating the song title fails, and stop reconnecting right away when disconnected.
* RTMP Streamer now sends each AAC packet or MP3 frame in its own tag, timestamped from the amount of audio sent instead of the clock.
* The quality level of Ogg Opus in VBR mode now takes effect.
* AAC settings the encoder does not support, such as a system sample rate above 48000 Hz, now show the reason instead of an internal error.
* Problems such as a buffer overrun when the buffer size of an input device becomes larger, device switches that were sometimes not applied, memory leaks when connecting again, and the Loopback device left behind when Ladiocast is ended by the kill command are fixed.

There is no new feature in this version; it is a release of fixes for the streamers and the audio devices.
Every input device is now silent for the first 0.8 seconds immediately following selection, including devices which made no noise.
When the connection to the server is lost in Ogg Vorbis or Ogg Opus, listeners who were playing may need to start playing again after Ladiocast reconnects.
If your Icecast or SHOUTcast server or your listeners expected another character set for the song title, such as Shift_JIS, please let me know.

See the [ChangeLog](/changelog) for the complete list.

How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback
