# Release Candidate Testing

Ladiocast 1.0.0 is in release candidate testing. Only fixes are planned from here, so this is the last round of testing before the release. Features may change, and you may run into bugs. Thank you for helping to test it.

## Requirements

- macOS 13 Ventura or later
- An Intel or Apple silicon Mac
- The [TestFlight](https://apps.apple.com/app/testflight/id899247664) app from the Mac App Store
- Audio input devices and, for streaming, an Icecast, SHOUTcast or RTMP server of your own

## How to join

1. Install TestFlight from the Mac App Store.
2. Open the [Ladiocast public TestFlight link](https://testflight.apple.com/join/pcEXNUc1) on your Mac and accept the invitation.
3. Install Ladiocast from TestFlight. Ladiocast asks for permission to use the microphone the first time it needs an audio input.

TestFlight builds expire after 90 days. TestFlight notifies you when a new build is available.

## What to test

The 1.0.0 release candidate includes these changes. Reports on them are especially helpful. See the [ChangeLog](/changelog) for the full list.

- Eight new languages: German, French, Spanish, Italian, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese. Ladiocast follows the language of your Mac
- A crash at launch fixed: when an audio device selected last time cannot be started, Ladiocast now shows an alert, sets that device to No Device and keeps running
- Improved audio quality of the mixer: every input and output device is now matched to Ladiocast's own clock, so long sessions with different devices, such as a USB microphone and Bluetooth headphones, should stay free of clicks and a growing delay
- RTMP Streamer rewritten to use librtmp, with HE-AAC and MP3 added to AAC
- Monaural input devices mapped to both left and right channels
- The default system sample rate changed from 44,100 Hz to 48,000 Hz
- Running as a universal app on Intel and Apple silicon Macs

Also, anything you do with Ladiocast regularly, such as long broadcasts, multiple streamers at once and reconnecting after a network error, is worth testing.

If you use Ladiocast in one of the new languages, please look through the menus, windows and messages, and tell us about text that is cut off, overlaps or reads unnaturally, with a screenshot if you can. If you see the alert about a device that failed to start, please send us its full text, together with the device and how it was connected.

If you try a smaller Sample Frame Length than the default 256 in Preferences to shorten the latency, please tell us whether you hear clicks, together with your Mac model.

## Feedback

See [Feedback](/feedback) for how to report crashes, bugs and requests.
