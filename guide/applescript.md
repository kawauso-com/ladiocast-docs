# AppleScript

## AppleScript Interface

You can command Ladiocast to read a configuration file and connect to the servers through its AppleScript interface:

```applescript
tell application "Ladiocast" to open "/Users/username/Desktop/foo.plist"
tell application "Ladiocast" to connect every streamer
tell application "Ladiocast" to disconnect every streamer
```

The metadata song field can be changed by the AppleScript interface with the property "metadata song". The song is sent to the server by the Icecast and SHOUTcast streamers. For example, you can copy the title of the tune you are playing in Music to Ladiocast metadata by executing the following script:

```applescript
tell application "Music" to set currentTrack to name of current track
tell application "Ladiocast" to set metadata song to currentTrack
```

The `connect` and `disconnect` commands take the streamers as `streamer` elements, described below:

```applescript
tell application "Ladiocast"
    connect streamer 1
    disconnect {streamer 1, streamer 2}
    connect (every streamer whose kind is "icecast")
    tell streamer 2 to disconnect
end tell
```

As before, they also take the number of a streamer, as numbered in the Streamer menu (`connect 1`), and act on all the streamers without anything (`connect`). A streamer which does not exist is an error (“Invalid index”, -1719, for `streamer 9` or `9`; -1728 when it is in a list), and then nothing is done to the others either. Nothing is done to a streamer of “None”.

`connect` and `disconnect` return when the streamers have connected or disconnected, or with the first error when any of them has failed to. What the commands and the “Connect” button ask of a streamer is done one by one in the order it is asked, so a command also waits for what was asked before it. Connecting a connected streamer, or disconnecting a disconnected one, does nothing. While a command waits, the windows are kept updated, but clicks and keys are handled after it returns. Ladiocast handles one command at a time: the commands of other scripts, reading a property and `quit` included, also wait for the command to return, whichever streamer they are for. So a script reads `"connecting"` or `"disconnecting"` as the `status` only while a request of the “Connect” button is being done.

When `connect` fails, the error is returned to the script, and no alert is shown. When a connection ends with an error, an alert is shown, whether it was made by `connect` or by the “Connect” button, unless the streamer has an event handler for “Disconnected with error”, which is run instead. Each streamer shows only its latest alert, over its window, and closes it when it starts connecting again. The AppleScript commands go on working while alerts are shown, and the error can also be read as the `last error` property.

The state of each streamer can be read as a `streamer` element of the application:

```applescript
tell application "Ladiocast"
    connect streamer 1
    delay 60
    get {status, sent bytes, elapsed time, last error} of streamer 1
end tell
```

- `index`: The number of the streamer, from 1.
- `kind`: `"none"`, `"icecast"`, `"rtmp"`, `"shoutcast"` or `"loopback"`, as text.
- `status`: `"disconnected"`, `"connecting"`, `"connected"` or `"disconnecting"`, as text, such as in `status of streamer 1 is "connected"`. An Icecast or SHOUTcast streamer stays `"connected"` while it tries to connect again after a communication error. The Loopback streamer is `"connected"` while its device exists.
- `sent bytes`, `elapsed time`: The bytes sent and the seconds of the current or last connection, kept until the streamer connects again.
- `last error`: The description and the suggestion of the last error, in two lines. It is `missing value` from when the streamer is asked to connect until an error occurs.

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

The events are “Connected”, “Disconnected” and “Disconnected with error”, each with its field for the handler name. With a handler for “Disconnected with error”, the alert of the error is not shown.

### Notice

While running an AppleScript, no operation from the graphical user interface is executed. The commands of other scripts and the other event handlers wait as well, until it ends.

The whole content of AppleScript is to be executed whenever it is loaded or the streamer window is opened.
