---
title: Ladiocast 1.1.0-beta.2 Released
date: 2026-10-23
---

# Ladiocast 1.1.0-beta.2 Released

![Join the LadioCast beta - TestFlight - Apple](/images/Join-the-LadioCast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.1.0-beta.2, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.1.0-beta.1 to 1.1.0-beta.2 are as follows:

* Ladiocast itself no longer asks for system audio recording: only the application which receives the audio from Loopback Streamer needs the permission. The alert about a silent loopback device was removed with it.

macOS no longer asks Ladiocast for System Audio Recording when you choose Loopback. If you allowed or denied Ladiocast with an earlier beta, the audio comes through either way, and you may remove Ladiocast from that list.
The receiving application must still be allowed in System Settings > Privacy & Security > Screen & System Audio Recording. If it is not listed there, add it to System Audio Recording Only with the + button; without the permission, it records silence. Ladiocast cannot detect this, so check the level meter of the receiving application while recording. The Loopback window and Help > ReadMe now say so.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the application that received the audio from Loopback Streamer, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
