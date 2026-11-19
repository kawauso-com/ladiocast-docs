---
title: Ladiocast 1.2.0 Released
date: 2026-11-20
---

# Ladiocast 1.2.0 Released

![still the war of the worlds](/images/still-the-war-of-the-worlds.png)

Ladiocast 1.2.0 is now available in the [Mac App Store](https://apps.apple.com/app/ladiocast/id411213048). Thank you to everyone who took part in the TestFlight test of 1.2.0-beta.0, 1.2.0-beta.1, 1.2.0-beta.2, 1.2.0-beta.3 and 1.2.0-beta.4.

The 1.2.0 beta test is over. The app itself is the same as 1.2.0-beta.4.

Changes from version 1.1.1 to 1.2.0 are as follows:

* RTMP Streamer can now send a still image as H.264 video along with the audio. Choose the image, video quality and resolution (720p or 1080p) in the new Still tab.
* AppleScript can now read each streamer as a "streamer" element, with its kind, status, sent bytes, elapsed time and last error. The connect and disconnect commands take these elements, such as "connect every streamer", as well as the number of a streamer as before.
* The connect and disconnect commands of AppleScript now return when the streamers have connected or disconnected, and return the error to the script instead of showing an alert when connecting fails. The commands and the Connect button are handled one at a time.
* The alert of a connection error no longer stops the app: each streamer shows its latest alert over its window, and closes it when it starts connecting again.
* A configuration file opened by the open command of AppleScript or from Finder is now applied to the streamers, and a configuration file that cannot be read shows an alert with its path.
* Icecast and Shoutcast streamers no longer reconnect every few seconds when the network falls behind for a moment, as seen with Ogg PCM over Wi-Fi.
* Icecast, Shoutcast and RTMP streamers now connect again once, 5 seconds after a connection ends with an error, and show the alert only when that fails. The Connect button stays on while waiting, and clicking it gives the wait up. A streamer with an event handler for "Disconnected with error" calls the handler instead, as before. Icecast and Shoutcast streamers no longer reconnect by themselves right away. When the Connect button is clicked again while connecting, only the last click shows how it ends.
* Icecast Streamer no longer makes the app quit when it connects to a server over TLS (SSL), or to a server that closes the connection at once.
* Icecast and Shoutcast streamers now send the Song Info to the server on a connection of its own, so the audio goes on while the server answers. Icecast Streamer no longer stays connecting to Icecast 2.5, and the Song Info set before connecting now shows on Ogg Vorbis streams as well.
* Ogg Vorbis streams now end with the last of the audio and an end-of-stream page when the streamer disconnects, and Ogg Opus and Ogg PCM streams no longer send "(null)" for a stream name, genre, description or URL that is not set.
* A streamer with no type is now shown as "None", in the language of the app, instead of N/A.

The still image is for services where a video track is possible or needed. Choose Streamer > Streamer 1 > RTMP, open the Still tab, and choose an image with Source Image > Choose Image… or drag an image file from Finder. Video Bit Rate shows what the video adds to the audio. The image cannot be changed while connected, and Source Image > None goes back to audio only. A configuration file saved with File > Save As includes the image. See [How to use](/guide/usage) for details.
Among streaming services, I have seen the picture on YouTube only. Reports from other services are welcome.
Scripts written for earlier versions keep working: connect and disconnect still take the number of a streamer. See [AppleScript](/guide/applescript) for the new element.

See the [ChangeLog](/changelog) for the complete list.

How to report crashes, bugs and requests: https://ladiocast-docs.kawauso.com/feedback
