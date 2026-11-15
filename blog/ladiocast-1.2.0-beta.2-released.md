---
title: Ladiocast 1.2.0-beta.2 Released
date: 2026-11-15
---

# Ladiocast 1.2.0-beta.2 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.2.0-beta.2, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.2.0-beta.1 to 1.2.0-beta.2 are as follows:

* Ogg Vorbis streams now end with the last of the audio and an end-of-stream page when the streamer disconnects, and Ogg Opus and Ogg PCM streams no longer send "(null)" for a stream name, genre, description or URL that is not set.

If you stream in an Ogg format to Icecast, please tell me whether players and recordings show the stream and its tags correctly, and whether it ends cleanly when you disconnect.
The changes of [1.2.0-beta.1](/blog/ladiocast-1.2.0-beta.1-released) are still worth trying: AppleScript, alerts, configuration files, Icecast and Shoutcast over Wi-Fi, Icecast over TLS (SSL), and the still image of RTMP Streamer.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software, the encoding format, sample rate and bit rate, the script you ran if any, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
