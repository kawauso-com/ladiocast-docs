# In error cases

## Disable to boot after configuration modified

Quit Ladiocast, delete the user configuration and start it again.

Ladiocast runs in the App Sandbox, so its configuration is kept in its container, `~/Library/Containers/com.kawauso.LadioCast` (the bundle identifier is `com.kawauso.LadioCast`, with a capital `C`). The easiest way is to move the container to the Trash in Finder:

1. In Finder, choose "Go to Folder..." from the Go menu (Shift-Command-G) and enter `~/Library/Containers/`.
2. Move the folder `com.kawauso.LadioCast` to the Trash.

You will get the initial state.

::: tip
Deleting the container from Terminal (`rm`) may be refused with "Operation not permitted", even with `sudo`, unless Terminal is allowed to access other apps' data (System Settings, Privacy & Security, Full Disk Access). `defaults delete com.kawauso.LadioCast` does not help either: for a sandboxed app, `defaults` may report that the domain is not found.
:::

## Cannot connect over TLS (SSL)

If Ladiocast shows "Failed to connect" when you connect to a server over TLS, check the following. The message is the same as for any other connection failure, so it does not tell the reason.

### Icecast Streamer

- Enter the host name, not the IP address. Ladiocast checks the server certificate against the name you enter, and a certificate issued for a host name does not match an IP address.
- The host name you enter must be one of the names in the certificate.
- The certificate must be trusted by macOS. Ladiocast reads the root certificates that macOS trusts when it starts, and verifies the server certificate with them. A certificate issued by a private certificate authority, or a self-signed certificate, is accepted only if you have set it to be trusted for SSL in Keychain Access (Get Info, Trust, Secure Sockets Layer (SSL): Always Trust); just adding it to the Keychain is not enough. Restart Ladiocast after changing the trust settings. An expired certificate is rejected.
- Set the TLS port of the server, not the plain-text port.
- Make sure the date and time of your Mac are correct.

### RTMP Streamer

An `rtmps://` connection is encrypted, but Ladiocast does not verify the server certificate yet, so a certificate problem does not cause a failure. If it fails, check the URL and the port that your service gave you.

## Reporting problems

Run Console(`/Applications/Utilities/Console.app`) and see if Ladiocast writes any messages. Report problems with that you found to my mail address, or as the blog's comment.
