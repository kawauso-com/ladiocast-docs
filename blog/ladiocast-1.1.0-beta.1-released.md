---
title: Ladiocast 1.1.0-beta.1 Released
date: 2026-10-22
---

# Ladiocast 1.1.0-beta.1 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.1.0-beta.1, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.1.0-beta.0 to 1.1.0-beta.1 are as follows:

* Renamed the input device of Loopback Streamer to "Ladiocast Loopback".

The device was named "Ladiocast Loopback Streamer" in beta.0. Choose "Ladiocast Loopback" as the audio input of a recording or streaming application, such as OBS Studio or QuickTime Player. If you chose the device in an application with beta.0, please check that the application still uses it under the new name, without choosing it again.
The device is not listed in System Settings > Sound > Input, so choose it in the receiving application. The Loopback window and Help > ReadMe now say so.
Both Ladiocast and the receiving application must be allowed in System Settings > Privacy & Security > Screen & System Audio Recording. If the receiving application is not listed there, add it to System Audio Recording Only with the + button; without the permission, it records silence.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the application that received the audio from Loopback Streamer, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
