---
title: Ladiocast 1.1.1-beta.2 Released
date: 2026-11-05
---

# Ladiocast 1.1.1-beta.2 Released

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

I have released Ladiocast 1.1.1-beta.2, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.1.1-beta.1 to 1.1.1-beta.2 are as follows:

* The first 0.8 seconds of every input device are now discarded each time it starts, so the noise from the audio jack of a Mac no longer comes through.

Resolved an issue where an input device receiving audio from a Mac's audio jack would produce noise when Ladiocast was launched or when switching devices.
Every input device is now silent for the first 0.8 seconds immediately following selection, including devices which made no noise.
If you use a microphone on the audio jack, please tell me whether any noise remains when launching Ladiocast, when switching the input device and after waking the Mac from sleep. The noise does not appear while another application is using the input, so please quit such applications first. Please also tell me if another input device still makes noise after the first 0.8 seconds.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streamer type and server software, the encoding format, sample rate and bit rate, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
