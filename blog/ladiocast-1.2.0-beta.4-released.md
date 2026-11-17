---
title: Ladiocast 1.2.0-beta.4 Released
date: 2026-11-17
---

# Ladiocast 1.2.0-beta.4 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.2.0-beta.4, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.2.0-beta.3 to 1.2.0-beta.4 are as follows:

* Icecast, Shoutcast and RTMP streamers now connect again once, 5 seconds after a connection ends with an error, and show the alert only when that fails. The Connect button stays on while waiting, and clicking it gives the wait up. A streamer with an event handler for "Disconnected with error" calls the handler instead, as before. Icecast and Shoutcast streamers no longer reconnect by themselves right away. When the Connect button is clicked again while connecting, only the last click shows how it ends.

If you stream to Icecast, Shoutcast or an RTMP service, please tell me how the streamer behaves when the connection ends with an error, such as when the server restarts or the network drops for a moment. It should connect again about 5 seconds later without an alert, and show the alert only when that fails.
Until beta.3, Icecast and Shoutcast streamers reconnected by themselves right away, so the stream now stops for about 5 seconds instead. Please tell me if this gap matters for your streams, for example over Wi-Fi.
If you use an event handler for "Disconnected with error", please tell me whether the handler is still called and the streamer does not connect again by itself.
The changes of [1.2.0-beta.1](/blog/ladiocast-1.2.0-beta.1-released), [1.2.0-beta.2](/blog/ladiocast-1.2.0-beta.2-released) and [1.2.0-beta.3](/blog/ladiocast-1.2.0-beta.3-released) are still worth trying: AppleScript, alerts, configuration files, Icecast and Shoutcast over Wi-Fi, Icecast over TLS (SSL), the Ogg formats, the Song Info, Icecast 2.5, and the still image of RTMP Streamer.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software with its version, the encoding format, sample rate and bit rate, the script you ran if any, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
