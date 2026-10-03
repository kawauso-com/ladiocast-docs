# What is Ladiocast?

Ladiocast is a software running on Mac OS X to stream digital audio such as Internet radio program. It has the following features:

- Supporting Icecast 2, SHOUTcast v1 and RTMP as audio source protocols.

- Ability to send the audio output to multiple servers simultaneously.

- Supporting Ogg Vorbis, MP3, AAC, HE-AAC and Ogg Opus encoding formats.

- Equipped a 4-in/4-out/4-bus audio mixer, where you can route sound from input devices to output devices flexibly.

- SSL supported.

- Universal Binary application running on Mac OS X 10.6 and later.

## Notice when using the Ogg Opus encoding

Currently it needs the system sample rate of Ladiocast to be 48000 (default 44100). The system sample rate is *not* the encoding sample rate on the streamer windows but that in the preferences panel. Also changing the values in the preferences panel needs Ladiocast to be restarted.

## Notice when using the Ogg PCM encoding

Specification of the Ogg PCM encoding format of Ladiocast follows <https://wiki.xiph.org/OggPCM>, but numerical values are expressed in the *little-endian* (according to other specifications of Ogg).

The sample values are in IEEE Float 32-bit little endian format and the sample rate is set as same as the system sample rate.
