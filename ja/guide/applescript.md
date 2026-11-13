# AppleScript

## AppleScriptインタフェース

AppleScriptを使ってLadiocastに接続設定ファイルを読み込ませたり、サーバーに接続させたりすることができます。

```applescript
tell application "Ladiocast" to open "/Users/username/Desktop/foo.plist"
tell application "Ladiocast" to connect every streamer
tell application "Ladiocast" to disconnect every streamer
```

Ladiocastのメタデータの曲情報フィールドは属性"metadata song"としてAppleScriptから参照し変更することができます。 曲情報がサーバーに送られるのは、IcecastとSHOUTcastのストリーマーのみです。 例えばミュージックの現在の曲名をLadiocastのメタデータにコピーするAppleScriptは

```applescript
tell application "Music" to set currentTrack to name of current track
tell application "Ladiocast" to set metadata song to currentTrack
```

と書くことができます。

`connect`と`disconnect`の対象は、後述の要素`streamer`で指定します。

```applescript
tell application "Ladiocast"
    connect streamer 1
    disconnect {streamer 1, streamer 2}
    connect (every streamer whose kind is "icecast")
    tell streamer 2 to disconnect
end tell
```

以前と同じく、ストリーマーメニューの番号(`connect 1`)で指定することも、何も指定せずにすべてのストリーマーを対象にすること(`connect`)もできます。 存在しないストリーマーを指定するとエラー(`streamer 9`や`9`は“Invalid index”の-1719でリストの中にある場合は-1728)になり、他のストリーマーにも何もしません。 “なし”のストリーマーには何もしません。

`connect`と`disconnect`は、対象のストリーマーの接続または切断が完了するまで待ってから戻ります。失敗したものがあれば、最初のエラーを返します。 コマンドと“接続する”ボタンによるストリーマーへの要求は、要求された順に1つずつ処理されます。そのためコマンドは、先に出された要求が終わるのも待ちます。 接続済みのストリーマーへの接続と、切断済みのストリーマーの切断は、何もしません。 コマンドが待っている間もウィンドウの表示は更新されますが、クリックやキー入力はコマンドが戻ってから処理されます。 Ladiocastはコマンドを1つずつ処理します。そのため他のスクリプトからのコマンドも、どのストリーマーに対するものでも、属性の読み取りや`quit`を含めて、そのコマンドが戻るまで待たされます。 `status`が`"connecting"`や`"disconnecting"`として読めるのは、“接続する”ボタンによる要求が処理されている間だけです。

`connect`が接続に失敗した場合は、エラーをスクリプトに返し、アラートは表示しません。 接続がエラーで切れた場合は、`connect`で行った接続でも“接続する”ボタンで行った接続でもアラートを表示します。ただし、そのストリーマーに“エラー切断時”のイベントハンドラーが設定されている場合は、アラートの代わりにそのハンドラーが実行されます。 アラートはストリーマーごとに最新の1つだけがそのストリーマーのウィンドウに重ねて表示され、そのストリーマーが次に接続を始めると閉じられます。 アラートが表示されている間もAppleScriptのコマンドは止まらず、エラーの内容は属性`last error`でも読むことができます。

各ストリーマーの状態は、アプリケーションの要素`streamer`として参照することができます。

```applescript
tell application "Ladiocast"
    connect streamer 1
    delay 60
    get {status, sent bytes, elapsed time, last error} of streamer 1
end tell
```

- `index`: ストリーマーの番号(1から)。
- `kind`: `"none"`、`"icecast"`、`"rtmp"`、`"shoutcast"`、`"loopback"`のいずれかの文字列。
- `status`: `"disconnected"`、`"connecting"`、`"connected"`、`"disconnecting"`のいずれかの文字列(`status of streamer 1 is "connected"`のように比べます)。 IcecastまたはSHOUTcastのストリーマーが通信エラーの後に接続し直している間は、`"connected"`のままです。 Loopbackストリーマーは、デバイスが存在している間`"connected"`になります。
- `sent bytes`、`elapsed time`: 現在または直前の接続の送信バイト数と経過秒数。次に接続するまで保持されます。
- `last error`: 直前のエラーの説明と対処の2行。接続を要求されてからエラーが起きるまでは`missing value`です。

## イベントハンドラーAppleScript

ストリーマー上で所定のイベントが発生した場合、あらかじめ読み込んでおいたAppleScript内の指定したハンドラーを実行させることができます。 例えば以下のような内容のAppleScriptファイルを用意したとします。

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

ストリーマーウィンドウの“イベント”タブの“イベントハンドラーAppleScript”にこのファイルを選択して読み込み、イベントハンドラー名の“エラー切断時”フィールドに`disconnected`と入力します。 このように設定することでエラーによる接続切れイベントが発生した場合にAppleScriptにより10秒間隔で3回まで接続を繰り返す動作を行わせることができます。

イベントは“接続時”、“通常切断時”、“エラー切断時”の3つで、それぞれにハンドラー名のフィールドがあります。 “エラー切断時”のハンドラーを設定した場合、そのエラーのアラートは表示されません。

### 注意

AppleScriptを実行している間はグラフィックユーザーインターフェースからの操作を実行することはできません。 他のスクリプトからのコマンドや他のイベントハンドラーも、実行が終わるまで待たされます。

AppleScriptファイルは選択される度、およびストリーマーウィンドウが開かれる度にその内容が実行されます。
