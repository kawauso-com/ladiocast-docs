# AppleScript

## AppleScript Interface

You can command Ladiocast to read a setting file, connect to the server through its AppleScript interface:

```applescript
tell application "Ladiocast" to open "/Users/kawauso/Desktop/foo.plist"
tell application "Ladiocast" to connect
tell application "Ladiocast" to disconnect
```

The metadata song field can be changed by the AppleScript interface with a property name "metadata song". For example, you can copy the title of the tune you playing in iTunes to Ladiocast metadata by executing the following script:

```applescript
tell application "iTunes" to set currentTrack to name of current track
tell application "Ladiocast" to set metadata song to currentTrack
```

## Event Handler AppleScript

If a certain event occurs on a streamer, the specified handler in the AppleScript loaded in advance can be run. Suppose the following content to be provided as an AppleScript file:

```applescript
on disconnected(streamer_index)
    repeat 3 times
        delay 10
        try
            tell application "Ladiocast" to connect streamer_index
            return
        end try
    end repeat
end disconnected
```

Load the file with the “Event Handler AppleScript” in the “Events” tab of the streamer window and enter `disconnected` at the “Disconnected with error” field of “Event Handler Name”. When a disconnection due to an error occurs, that AppleScript code performs reconnection repeated three times by 10-second intervals.

The event currently supported is “Disconnected with error” only.

### Notice

While running an AppleScript, no operation from the graphical user interface is executed.

The whole content of AppleScript is to be executed whenever it is loaded or the streamer window is opened.
