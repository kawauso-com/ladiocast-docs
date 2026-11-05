---
title: Ladiocast 1.1.1-beta.1 Released
date: 2026-11-04
---

# Ladiocast 1.1.1-beta.1 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.1.1-beta.1, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.1.1-beta.0 to 1.1.1-beta.1 are as follows:

* Ogg streams from Icecast Streamer no longer stop reaching listeners after auto-reconnecting.

When the connection to the server was lost in Ogg Vorbis or Ogg Opus, Ladiocast reconnected and stayed connected with no error, but listeners received no audio until you disconnected and connected again. This has been there since before 1.1.1. MP3 and AAC were not affected.
If you stream in an Ogg format, please tell me whether listeners can play the stream again after a reconnection, for example after restarting the server while streaming. Listeners who were playing when the connection was lost may need to start playing again.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software, the encoding format, sample rate and bit rate, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
