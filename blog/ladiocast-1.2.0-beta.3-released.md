---
title: Ladiocast 1.2.0-beta.3 Released
date: 2026-11-17
---

# Ladiocast 1.2.0-beta.3 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.2.0-beta.3, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.2.0-beta.2 to 1.2.0-beta.3 are as follows:

* Icecast and Shoutcast streamers now send the Song Info to the server on a connection of its own, so the audio goes on while the server answers. Icecast Streamer no longer stays connecting to Icecast 2.5, and the Song Info set before connecting now shows on Ogg Vorbis streams as well.

If you stream to Icecast or Shoutcast, please tell me whether players and the server's status page show the Song Info typed before connecting, and the one you change while connected.
If your server runs Icecast 2.5, such as the icecast2 package of Ubuntu 26.04, please tell me whether Ladiocast connects and updates the Song Info. Icecast 2.5 writes a warning about "legacy" metadata to its log for each update; this is expected.
The changes of [1.2.0-beta.1](/blog/ladiocast-1.2.0-beta.1-released) and [1.2.0-beta.2](/blog/ladiocast-1.2.0-beta.2-released) are still worth trying: AppleScript, alerts, configuration files, Icecast and Shoutcast over Wi-Fi, Icecast over TLS (SSL), the Ogg formats, and the still image of RTMP Streamer.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software with its version, the encoding format, sample rate and bit rate, the script you ran if any, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
