---
title: Ladiocast 1.1.1-beta.0 Released
date: 2026-11-03
---

# Ladiocast 1.1.1-beta.0 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.1.1-beta.0, and its test has started on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.1.0 to 1.1.1-beta.0 are as follows:

* Icecast and Shoutcast streamers now always send the song metadata in UTF-8, keep streaming when updating the song title fails, and stop reconnecting right away when disconnected.
* RTMP Streamer now sends each AAC packet or MP3 frame in its own tag, timestamped from the amount of audio sent instead of the clock.
* The quality level of Ogg Opus in VBR mode now takes effect.
* AAC settings the encoder does not support, such as a system sample rate above 48000 Hz, now show the reason instead of an internal error.
* Problems such as a buffer overrun when the buffer size of an input device becomes larger, device switches that were sometimes not applied, memory leaks when connecting again, and the Loopback device left behind when Ladiocast is ended by the kill command are fixed.

There is no new feature in this version; it is a release of fixes for the streamers and the audio devices.
Please stream with the streamers and the encoding formats you usually use, and tell me whether the song title appears correctly with non-ASCII characters, whether RTMP streams play without gaps or a growing delay over a long session, and whether switching devices or changing the buffer size of an input device while the audio is running causes any noise.
If your Icecast or SHOUTcast server or your listeners expected another character set for the song title, such as Shift_JIS, please let me know.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software, the encoding format, sample rate and bit rate, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
