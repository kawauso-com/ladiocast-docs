# Alpha Testing

Ladiocast 1.0.0 is in alpha. Features may change, and you may run into bugs. Thank you for helping to test it.

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

The 1.0.0 alpha includes these changes. Reports on them are especially helpful. See the [ChangeLog](/changelog) for the full list.

- RTMP Streamer rewritten to use librtmp, with HE-AAC and MP3 added to AAC
- Monaural input devices mapped to both left and right channels
- The default system sample rate changed from 44,100 Hz to 48,000 Hz
- Running as a universal app on Intel and Apple silicon Macs

Also, anything you do with Ladiocast regularly, such as long broadcasts, multiple streamers at once and reconnecting after a network error, is worth testing.

## Feedback

See [Feedback](/feedback) for how to report crashes, bugs and requests.
