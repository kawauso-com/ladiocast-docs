---
title: Ladiocast 1.0.0-rc.0 Released
date: 2026-10-16
---

# Ladiocast 1.0.0-rc.0 Released

![Join the LadioCast beta - TestFlight - Apple](/images/Join-the-LadioCast-beta-TestFlight-Apple.png)

I have upgraded Ladiocast 1.0.0 from beta.0 to rc.0, the release candidate, and the test continues on App Store TestFlight.
If you would like to take part in the test, please proceed from
https://ladiocast-docs.kawauso.com/testing

Changes from version 1.0.0-beta.0 to 1.0.0-rc.0 are as follows:

* Added German, French, Spanish, Italian, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese localizations.
* Fixed a bug that the app crashed at launch when a selected audio device failed to start (set to No Device with an alert).

If you customize the language setting for Ladiocast, launch System Settings, navigate General > Language & Region > Applications, add Ladiocast to the list and select its language.
Please look through the menus, windows and messages, and tell me about text that is cut off, overlaps or reads unnaturally, with a screenshot if you can.

The launch crash was found thanks to a tester's crash report. In beta.0, if the audio device selected last time could not be started, Ladiocast crashed every time it was launched. Now it shows an alert, sets the device to No Device and keeps running. If you see this alert, please send me its full text, together with the device and how it was connected.

When reporting a problem, please include your macOS version, Mac model (Intel or Apple silicon), the language the app is shown in, the audio devices you used, the streaming server and format, and any message shown by the app. How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback

Thank you for your help.
